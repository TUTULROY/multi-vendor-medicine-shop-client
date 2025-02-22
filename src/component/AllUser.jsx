import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hook/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";

import Swal from "sweetalert2";



const AllUser = () => {
  
    const axiosSecure = useAxiosSecure();
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });
    const handleModifiedUser = (user , newRole) =>{
        axiosSecure.patch(`/users/both/${user._id}`, {role: newRole})
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0 ){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an User Modified Now`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    const handleMakeAdmin = (user) =>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an Admin Now`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    const handleDeleteUser =( user) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            
            axiosSecure.delete(`/users/${user._id}`)
            .then(res =>{
                if(res.data.deletedCount > 0){
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                }
            })
            }
          });
    }
    return (
        <div>
        <div>
          <h2 className="text-3xl ml-2 font-bold">Total User:{users.length} </h2>
        </div>
        <div className="divider"></div>
        <div>
        <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
    <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th className="text-xl">Make me Modified</th>
        <th className="text-xl">Make me Admin</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((item, index)=> <tr key={item._id}>
            <th>{index+1}</th>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.role}</td>
            <td>
           
            {item.role !== "admin" && (
                                        <div>
          <button onClick={() => handleModifiedUser(item, 'seller')} className="btn bg-green-500 m-1">
              <FaUsers className="text-white" /> Seller
          </button>
            <button onClick={() => handleModifiedUser(item, 'user')} className="btn bg-blue-500 m-1">
                <FaUsers className="text-white" /> User
            </button>
                 </div>
           )}
            </td>
            <td>
     { item.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(item)} className="btn bg-orange-500 btn-lg">
            <FaUsers className="text-white text-2xl"></FaUsers>
          </button>
          }
      </td>
            <td>
            <button  onClick={() => handleDeleteUser(item)} className="btn btn-ghost btn-xs text-red-600">
                <FaTrashAlt></FaTrashAlt>
            </button>
            </td>
          </tr>)
      }
     
  
    </tbody>
  </table>
</div>
        </div>
        </div>
    );
};

export default AllUser;