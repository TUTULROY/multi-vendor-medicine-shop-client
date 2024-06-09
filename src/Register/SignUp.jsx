import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAxiosPublic from "../hook/useAxiosPublic";
import useAuth from "../hook/useAuth";
import Swal from "sweetalert2";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "../SocialLogin/SocialLogin";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const SignUp = () => {
    const {createUser, updateUserProfile } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
        const {
            register,
            handleSubmit,
            // watch,
            reset,
            formState: { errors },
        } = useForm();
        const axiosPublic = useAxiosPublic();
        const onSubmit = async (data) => {
            console.log(data); 

            const imageFile = { image: data.photoURL[0] };
                
                const res = await axiosPublic.post(image_hosting_api, imageFile, {
                  headers: {
                    'content-type': 'multipart/form-data'
                  }
                });
                const photoURL = res.data.data.url;
                console.log(res.data);
            
            createUser(data.email, data.password, data.role)
            .then(result =>{
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, photoURL)
            .then(()=>{
              const userInfo = {
                name : data.name,
                email: data.email,
                role: data.role,
                photoURL

              }
              axiosPublic.post('/users', userInfo)
              .then(res =>{
                if(res.data.insertedId){
                  reset();
                  Swal.fire({
                      padding: 'top-end',
                      icon: 'success',
                      title: 'new user has been saved',
                      showConfirmButton: false,
                      timer: 1500
                  })

                }
              })
                // console.log('user profile info updated')
               
                
            })
            })

              
    };
    return (
        <>
        <Helmet>
            <title>Multi Vendor Medicine Shop || Sign Up</title>
        </Helmet>
        <div className="hero min-h-screen bg-base-200 py-3">
        <div className="">
          <div className="text-center">
            <h1 className="text-5xl font-bold py-9">Sign Up</h1>
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
              <select name="role" {...register("role", {required: true})} className="input input-bordered w-full">
                <option>user</option>
                <option>seller</option>
                      </select>
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                <input
        type={showPassword ? "text" : "password" }
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
        })} name="password" placeholder="Password" className="w-full input input-bordered"/>
      {errors.password && <span>{errors.password.message}</span>}
      <span className="absolute top-4 right-2" onClick={() => setShowPassword(!showPassword)}>
                    {
                        showPassword ? <FaEyeSlash />  : <FaEye />
                    }
                </span>
                </div>
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
            <p className="px-6 text-center text-2xl "><small>New Here? <Link className="text-blue-400" to="/login">Already have an account</Link></small></p>
            <SocialLogin></SocialLogin>
            
          </div>
        </div>
      </div>
        </>
    );
};

export default SignUp;