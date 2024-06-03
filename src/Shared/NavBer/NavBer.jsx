import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";


const NavBer = () => {
    const navLinks = <>
     <li><Link to='/'>Home</Link></li>
              <li>
                <Link to='shop'>Shop</Link>
                
              </li>
              <li><Link to='/dashboard/cart'>
          
       <FaShoppingCart className="ml-4"></FaShoppingCart>
        <div className="badge badge-secondary">+Cart</div>
      
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
          <a className="btn btn-ghost text-xl uppercase font-bold"> <span className="text-green-500">T.R</span><span className="text-blue-500">Medicine Shop</span> </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           
           {
            navLinks
           }
          </ul>
        </div>
        <div className="navbar-end">
        <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between"> Profile</a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
        </div>
      </div>
    );
};

export default NavBer;