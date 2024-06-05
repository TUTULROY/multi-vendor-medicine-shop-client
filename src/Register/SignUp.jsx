import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAxiosPublic from "../hook/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const SignUp = () => {
        const {
            register,
            handleSubmit,
            // watch,
            // reset,
            formState: { errors },
        } = useForm();
        const axiosPublic = useAxiosPublic();
        const onSubmit = async (data) => {
            console.log(data)

                const imageFile = { image: data.image[0] };
                
                const res = await axiosPublic.post(image_hosting_api, imageFile, {
                  headers: {
                    'content-type': 'multipart/form-data'
                  }
                });
                console.log(res.data);
              
    };
    return (
        <>
        <Helmet>
            <title>Bistro Boss || Sign Up</title>
        </Helmet>
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" {...register("name", {required:true})} name="name" placeholder="name" className="input input-bordered"  />
                {errors.name && <span>This field is required</span>}
              </div>
             
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email",{required:true})} name="email" placeholder="email" className="input input-bordered" />
                {errors.email && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                    <span className="label-text"> Role</span>
                </label>
              <select defaultValue="user" name="role" {...register("role", {required: true})} className="input input-bordered w-full">
                <option value="user">user</option>
                <option>seller</option>
                      </select>
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
        type="password"
        {...register("password", {
          required: "Password is required",
          minLength: { value: 6, message: "Password must be at least 6 characters long"
          },
          maxLength: { value: 20, message: "Password must be limits at least 20 characters"
          },
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
           message: "Password must contain at least one uppercase letter and one lowercase letter"
          }
        })} name="password" placeholder="Password" className="input input-bordered"/>
      {errors.password && <span>{errors.password.message}</span>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="file" name="photoURL" {...register("photoURL", {required:true})} placeholder="Photo Url" className="file-input input-bordered"  />
                {errors.photoURL && <span>This field is required</span>}
              </div>
              <div className="form-control mt-6">
                <input type="submit"  value="Sign Up" className="btn btn-primary" />
              </div>
            </form>
            <p className="px-6"><small>New Here? <Link to="/login">Already have an account</Link></small></p>
            
          </div>
        </div>
      </div>
        </>
    );
};

export default SignUp;