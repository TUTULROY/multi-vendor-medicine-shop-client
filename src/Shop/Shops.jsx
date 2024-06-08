
import { FaEye } from "react-icons/fa";
import useMenu from "../hook/useMenu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hook/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../hook/useAxiosSecure";
import useCart from "../hook/useCart";


const Shops = () => {
    const {user} =useAuth();
    const [menu]= useMenu();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const location = useLocation();
    const [, refetch] = useCart();
    // console.log(menu);
    // const {_id, item_name, item_generic_name, image, category, company, per_unit_price} = menu;
    const handleAddToCart = (item) =>{
        
        if(user && user.email){
            //todo
            const cartItem = {
                menuId : item._id,
                email: user.email,
                item_name: item.item_name,
                item_generic_name: item.item_generic_name,
                image: item.image,
                category: item.category,
                company: item.company,
                per_unit_price: item.per_unit_price
            }
            axiosSecure.post('/carts', cartItem)
        .then(res =>{
          console.log(res.data)
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${item.item_name} added to your cart`,
              showConfirmButton: false,
              timer: 1500
            });
            refetch();
        }
    })
        }
        else{
           
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              });
        }
    }
    
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
                        <button 
                        onClick={() => handleAddToCart(item)}
                         className="btn">Select</button>
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