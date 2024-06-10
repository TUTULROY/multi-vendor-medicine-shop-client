import Swal from "sweetalert2";
import useCart from "../../hook/useCart";
import useAxiosSecure from "../../hook/useAxiosSecure";
import useAuth from "../../hook/useAuth";
import { FaTrashAlt } from "react-icons/fa";

const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item)=> total + item.per_unit_price, 0);
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const handleDelete = id =>{

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
            
            axiosSecure.delete(`/carts/${id}`)
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
    };


    const handleDeleteAll = () =>{
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
            
                axiosSecure.delete('/carts', {
                    params: { email: user.email }
                })

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
            <div className="flex justify-evenly">
                <h2 className="text-4xl"> Items: {cart.length}</h2>
                <h2 className="text-4xl"> Total Price: ${totalPrice.toFixed(2)}</h2>
                <button className="btn">Pay</button>
                <button onClick={handleDeleteAll} className="btn btn-warning">Clear All</button>
            </div>
            <hr />
            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          #
        </th>
        <th>Image</th>
        <th>Item Name</th>
        <th>Company</th>
        
        <th>Delete</th>
        
        <th>Check Out</th>
      </tr>
    </thead>
    <tbody>
      {
        cart.map((item, index) =><tr key={item._id}>
            <th>
             {index}
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} />
                  </div>
                </div>
            
              </div>
            </td>
            <td>
             {item.item_name}
            </td>
            <td>{item.company}</td>
            <th>
              <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-xs">
                <FaTrashAlt></FaTrashAlt>
              </button>
            </th>
            <th>
              <button className="btn btn-ghost btn-xs">Check Out</button>
            </th>
          </tr> )
      }
      
    </tbody>

  </table>
</div>
            </div>
        </div>
    );
};

export default Cart;