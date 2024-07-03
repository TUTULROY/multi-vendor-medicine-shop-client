import { useForm } from "react-hook-form";

import Swal from "sweetalert2";
import useAxiosPublic from "../../hook/useAxiosPublic";
import useAxiosSecure from "../../hook/useAxiosSecure";
import useAuth from "../../hook/useAuth";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
    // const {item_name, short_description, item_generic_name, image, category, company, mass_unit, per_unit_price, discount_percentage} = item;
    const{user} = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // now send the menu item data to the server with the image url
            const menuItem = {
                item_name: data.name,
                short_description: data.description,
                item_generic_name:data.generic_name,
                
                company:data.company,
                mass_unit:data.mass_unit,
                category: data.category,
                
                per_unit_price: parseFloat(data.price),
                
                image: res.data.data.display_url,
                discount_percentage:parseFloat(data.discount_percentage),
                sellerEmail:user.email
            }
            // 
            const menuRes = await axiosSecure.post('/menu', menuItem);
            console.log(menuRes.data)
            if(menuRes.data.insertedId){
                // show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        console.log( 'with image url', res.data);
    };

    return (
        <div>
            
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Medicine Name*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Medicine Name"
                            {...register('name', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue="default" {...register('category', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="Tablet">Tablet</option>
                                <option value="Syrup">Syrup</option>
                                <option value="Capsule">Capsule</option>
                                <option value="Injection">Injection</option>
                                <option value="Saline">Saline</option>
                                <option value="Cream">Cream</option>
                            </select>
                        </div>

                        {/* price */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Price"
                                {...register('price', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                    </div>
                    <div className="flex gap-6">
                       
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Company*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Company"
                                {...register('company', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Mass Unit*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Mass Unit"
                                {...register('mass_unit', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                    </div>
                    <div className="flex gap-6">
                       
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Generic Name*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Generic Name"
                                {...register('generic_name', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Discount Percentage*</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Discount Percentage"
                                {...register('discount_percentage', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                    </div>
                    {/* recipe details */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea {...register('description')} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    </div>

                    <div className="form-control w-full my-6">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn">
                        Add Item 
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;