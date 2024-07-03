import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hook/useAuth";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { Link } from "react-router-dom";


const ManageMedicine = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: menu = [] } = useQuery({
        queryKey: ['menu', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/menu/${user.email}`)
            return res.data;
        }
    })
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
                 
             </tr>
             </thead>
             <tbody>
             {
                 menu.map((item, index) =><tr className="bg-base-200" key={item._id}>
                 <th>{index}</th>
                 <td>{item.item_name}</td>
                 <td>{item.item_generic_name}</td>
                 <td>{item.category}</td>
                 
             </tr>)
             }
             
             </tbody>
         </table>
         </div>
         <Link to='/dashboard/addItems'>
         <button className="btn btn-primary m-4"> Add Medicine</button>
         </Link>
         
                 </div>
    );
};

export default ManageMedicine;