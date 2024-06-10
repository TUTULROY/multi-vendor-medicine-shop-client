import { useEffect, useState } from "react";


const useDetails = (_id) => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch(`https://multi-vendor-medicine-shop-server.vercel.app/menu/${_id}`)
        .then(res => res.json())
        .then(data => {
        setItem(data);
        setLoading(false);
        });
    }, [_id])

    return [item, loading];
};

export default useDetails;