
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import useAuth from '../hook/useAuth';


const Login = () => {

   
    const {signIn} = useAuth;

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            Swal.fire({
                title: "User Login Successful",
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
              });
              navigate(from, {replace: true});
        })
    }

    
    return (
       <>
       <Helmet>
        <title>Multi-Vendor Medicine Shop || Login</title>
       </Helmet>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content  flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card  md:w-1/3 max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
         
        </div>
       
        <div className="form-control mt-6">
          
          <input  className="btn btn-primary" type='submit' value="Login"></input>
        </div>
      </form>
      <p className='px-6'><small>New Here? <Link to="/signUp">Create an account</Link></small></p>
     
    </div>
  </div>
</div>
       </>
    );
};

export default Login;