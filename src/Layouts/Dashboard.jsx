import { FaHome, FaShoppingCart, FaUser } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hook/useAdmin";
import useSeller from "../hook/useSeller";


const Dashboard = () => {

    const [isAdmin] = useAdmin();
    const [isSeller] = useSeller();
    console.log(isSeller);
   
    return (
        <div>
                    <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        
        <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
            <ul className="menu p-4 w-80 min-h-full bg-blue-500 text-base-content">
            {/* Sidebar content here */}
          
            { isAdmin ? 
            <>
                <li><NavLink to="/"><FaHome />Home</NavLink></li>
                <li><NavLink to="/dashboard/adminHome"><FaHome />Admin Home</NavLink></li>
                <li><NavLink to="/dashboard/allUser"><FaUser /> All Users</NavLink></li>
                <li><NavLink to="/dashboard/addMenu">Add Item</NavLink></li>
                <li><NavLink to="/dashboard/category">Manage Category</NavLink></li>
                <li><NavLink to="/dashboard/paymentManagement">Payment Management</NavLink></li>
                <li><NavLink to="/dashboard/salesReport">Sales Report</NavLink></li>
            </>
             : 
            <>   
            { isSeller ? <>
                <li><NavLink to="/"><FaHome />Home</NavLink></li>
                <li><NavLink to="/dashboard/sellerHome"><FaHome />Seller Home</NavLink></li>
            <li><NavLink to="/dashboard/addItems">Add Item</NavLink></li>
            <li><NavLink to="/dashboard/manageMedicine">Seller Manage Medicine</NavLink></li>
            
            </>
            :
            <>
            <li><NavLink to="/"><FaHome />Home</NavLink></li>
            <li><NavLink to="/dashboard/userHome"><FaHome /> User Home</NavLink></li>
            </>
                
            }                   
            </>
        }
            <div className="divider"></div>
            <li><NavLink to="/dashboard/cart"><FaShoppingCart></FaShoppingCart> My Cart</NavLink></li>
            <li><NavLink to="/dashboard/invoice"> Invoice</NavLink></li>
            <li><NavLink to="/dashboard/paymentHistory">Payment History</NavLink></li>
            </ul>
        
        </div>
        <div className="drawer-content flex flex-col">
            {/* Page content here */}
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        <Outlet></Outlet>
        </div> 
        </div>
    </div>
    );
};

export default Dashboard;