import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import useCart from "../../hook/useCart";
import useAuth from "../../hook/useAuth";


const NavBer = () => {
    const [cart] = useCart();
    const {user, logOut} = useAuth();
    const handleLogOut = () =>{
        logOut()
        .then(() =>{})
        .catch(error => console.log(error))
      }
    const navLinks = <>
     <li><Link to='/'>Home</Link></li>
              <li>
                <Link to='shop'>Shop</Link>
                
              </li>
              <li>
                <Link to='categoryDetails/Tablet'>Category Details</Link>
                
              </li>
              <li>
        <details>
          <summary>
          Languages
          </summary>
          <ul className="p-2 bg-base-100 rounded-t-none z-10">
            <li><a>English</a></li>
            <li><a>French</a></li>
          </ul>
        </details>
      </li>
              <li><Link to='/dashboard/cart'>
          
       <FaShoppingCart className="ml-4"></FaShoppingCart>
        <div className="badge badge-secondary">+{cart.length}</div>
      
      </Link></li>
    </>

    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             
            {
                navLinks
            }

            </ul>
          </div>
         <div className="">
         
         <a className="btn btn-ghost text-xl uppercase font-bold"> 
         <img className="w-10 rounded-full" src="/public/logo.jpg" alt="" />
          <span className="text-green-500">T.R</span><span className="text-blue-500">Medicine Shop</span> </a>
         
         </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           
           {
            navLinks
           }
          </ul>
        </div>
      <div className="navbar-end">
       {user ? ( <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={user.photoURL || "https://i.postimg.cc/4x2BCp42/tutulroy.jpg"} />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <Link>Update Profile</Link>
        </li>
        <li>
            <Link to='dashboard'>
            Dashboard
            </Link>
        </li>
        <button onClick={handleLogOut} className="btn"><a>Logout</a></button>
      </ul>
        </div>
       ):
       (
        
        <button className="btn btn-primary">
        <Link to='login'>Login</Link>
        
      </button>
      )
       }
        
    
        </div>
        
     
      </div>
    );
};

export default NavBer;