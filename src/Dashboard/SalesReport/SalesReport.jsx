import { useEffect, useState } from "react";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import DatePicker from "react-datepicker";
import DataTable from "react-data-table-component";

import jsPDF from 'jspdf';
import 'jspdf-autotable';


const SalesReport = () => {
    const axiosSecure = useAxiosSecure();
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [sortedData, setSortedData] = useState([]);
    const { data: stats = {}, refetch } = useQuery({
        queryKey: ['admin-stats', startDate, endDate],
        queryFn: async () => {
            const params = {};
            if (startDate) params.startDate = startDate.toISOString();
            if (endDate) params.endDate = endDate.toISOString();
            const res = await axiosSecure.get('/admin-stats', { params });
            return res.data;
        }
    });

    useEffect(() => {
        if (stats.sales) {
            const sortedSales = [...stats.sales].sort((a, b) => new Date(a.date) - new Date(b.date));
            setSortedData(sortedSales);
        }
    }, [stats.sales]);

    const handleDateChange = () => {
        
        refetch();
    };

    const downloadPDF = () => {
        const doc = new jsPDF();
        const pdfColumns = columns.map(col => col.name);
        const pdfData = sortedData.map(row => [
            row.medicineName,
            row.sellerEmail,
            row.email,
            row.price,
            new Date(row.date).toLocaleDateString()
        ]);

        doc.autoTable({
            head: [pdfColumns],
            body: pdfData,
        });

        doc.save('sales-report.pdf');
    };

    const columns = [
        { name: 'Medicine Name', selector: row => row.medicineName, sortable: true },
        { name: 'Seller Email', selector: row => row.sellerEmail, sortable: true },
        { name: 'Buyer Email', selector: row => row.email, sortable: true },
        { name: 'Total Price', selector: row => row.price, sortable: true },
        { name: 'Date', selector: row => new Date(row.date).toLocaleDateString(), sortable: true }
    ];

    return (
        <div>
            <h2 className="text-3xl">Sales Report</h2>
            <div className="my-4">
                <DatePicker
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    placeholderText="Start Date"
                />
                <DatePicker
                    selected={endDate}
                    onChange={date => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    placeholderText="End Date"
                />
                <button onClick={handleDateChange} className="btn btn-primary ml-2">
                    Filter
                </button>
            </div>
            <DataTable
                columns={columns}
                data={sortedData || []}
                pagination
            />
            <div className="my-4">
                
               
                <button onClick={downloadPDF} className="btn btn-secondary ml-2">
                    Download PDF
                </button>
            </div>
        </div>
    );
};

export default SalesReport;