import { FaHome, FaShoppingCart, FaUser } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    // ToDo isAdmin
    const isAdmin = true; 

    return (
        <div>
                    <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
            {/* Page content here */}
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        <Outlet></Outlet>
        </div> 
        <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
            <ul className="menu p-4 w-80 min-h-full bg-blue-500 text-base-content">
            {/* Sidebar content here */}
          
            { isAdmin ? <>
                <li><NavLink to="/dashboard/userHome"><FaHome></FaHome> User Home</NavLink></li>
            <li><NavLink to="/dashboard/allUser"> <FaUser></FaUser> All User</NavLink></li>
            <li><NavLink to="/dashboard/addMenu">Add Item</NavLink></li>
            <li><NavLink to="/dashboard/category">Manage Category</NavLink></li>
            </>:
            <>
             <li><NavLink to="/dashboard/userHome"><FaHome></FaHome> User Home</NavLink></li>
            <li><NavLink to="/dashboard/allUser"> <FaUser></FaUser> All User</NavLink></li>
            <li><NavLink to="/dashboard/addMenu">Add Item</NavLink></li>
            <li><NavLink to="/dashboard/category">Manage Category</NavLink></li>
            </>
               
            }
            <div className="divider"></div>
            <li><NavLink to="/dashboard/cart"><FaShoppingCart></FaShoppingCart> My Cart</NavLink></li>
            </ul>
        
        </div>
        </div>
    </div>
    );
};

export default Dashboard;