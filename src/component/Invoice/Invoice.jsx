
import jsPDF from "jspdf";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import DataTable from "react-data-table-component";
// import { useEffect, useState} from "react";
import useAuth from "../../hook/useAuth";


const Invoice = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })

    // useEffect(() => {
    //     if (stats.users) {
    //         const sortedSales = [...stats.users].sort((a, b) => new Date(a.date) - new Date(b.date));
    //         setSortedData(sortedSales);
    //     }
    // }, [stats.users]);
    
    const downloadPDF = () => {
        const doc = new jsPDF();
        const logoBase64 = '/public/logo.jpg'; 

        doc.addImage(logoBase64, 'PNG', 40, 70,100,100);

       
        doc.setFontSize(18);
        doc.text('Memo', 105, 120, 40, 40);

        doc.setFontSize(12);
        doc.text(`User: ${user.displayName}`, 10, 50);
        doc.text(`Email: ${user.email}`, 10, 60);

        const pdfColumns = columns.map(col => col.name);
        const pdfData = payments.map(row => [
            row.menuItemIds,
            row.email,
            row.price,
            new Date(row.date).toLocaleDateString()
        ]);

        doc.autoTable({
            head: [pdfColumns],
            body: pdfData,
        });

        doc.save('users_payment_report.pdf');
    };
    const columns = [
        { name: 'Medicine Name', selector: row => row.menuItemIds, sortable: true },
       
        { name: 'User Email', selector: row => row.email, sortable: true },
        { name: 'Total Price', selector: row => row.price, sortable: true },
        { name: 'Date', selector: row => new Date(row.date).toLocaleDateString(), sortable: true }
    ];
    return (
        <div>
            <div className="flex flex-col items-center">
            <img className="w-10 rounded-full mb-4" src="/public/logo.jpg" alt="" />
            <h2 className="text-3xl">Memo</h2>
            </div>
            
       
        <DataTable
            columns={columns}
            data={payments || []}
            pagination
        />
        <div className="text-center my-4">
            
           
            <button onClick={downloadPDF} className="btn btn-secondary ml-2">
                Download PDF
            </button>
        </div>
    </div>
    );
};

export default Invoice;