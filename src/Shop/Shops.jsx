
import { FaEye } from "react-icons/fa";
import useMenu from "../hook/useMenu";
import { Link } from "react-router-dom";


const Shops = () => {
    const [menu]= useMenu();
    
    return (
        <div className="">
           <div className="overflow-x-auto">
            <table className="table table-xs">
                {/* head */}
                <thead>
                <tr>
                    <th>#</th>
                    <th>Item Name</th>
                    <th>Item Generic Name</th>
                    <th>Category</th>
                    <th>Select Button</th>
                    <th>Eye Button</th>
                </tr>
                </thead>
                <tbody>
                {
                    menu.map((item, index) =><tr className="bg-base-200" key={item._id}>
                    <th>{index}</th>
                    <td>{item.item_name}</td>
                    <td>{item.item_generic_name}</td>
                    <td>{item.category}</td>
                    <td>
                        <button className="btn">Select</button>
                    </td>
                    <td>
                        <Link to={`/detailsPage/${item._id}`}>
                        <button className="btn">
                        <FaEye />
                        </button>
                        </Link>
                        
                    </td>
                </tr>)
                }
                
                
                
                </tbody>
            </table>
            </div>
                    </div>
    );
};

export default Shops;