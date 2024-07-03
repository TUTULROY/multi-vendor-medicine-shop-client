import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hook/useAxiosSecure";
import Swal from "sweetalert2";


const PaymentManagement = () => {
    const axiosSecure = useAxiosSecure();
    const {data: payments = [], refetch} = useQuery({
        queryKey: ['payments'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/payments');
            return res.data;
        }
    });
    
    const handleModifiedItem = (payments) =>{
        axiosSecure.patch(`/payments/${payments._id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0 ){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Accept payment",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    return (
        <div>
        <h2 className="text3-xl">Total Payments: {payments.length}</h2>
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>price</th>
                        <th>Transaction Id</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    payments.map((payment, index) => <tr key={payment._id}>
                        <th>{index + 1}</th>
                        <td>${payment.price}</td>
                        <td>{payment.transactionId}</td>
                        <td>              
                        {payment.status === 'pending' ? (
                        <button onClick={() => handleModifiedItem(payment)} className="btn bg-green-500 m-1">
                            pending
                        </button>
                    ) : ( <span>paid</span>)}
                  </td>
                        
                    </tr>
                )}
                    
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default PaymentManagement;