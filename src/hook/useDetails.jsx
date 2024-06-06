import { useEffect, useState } from "react";


const useDetails = (id) => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch(`http://localhost:5000/menu/${id}`)
        .then(res => res.json())
        .then(data => {
        setItem(data);
        setLoading(false);
        });
    }, [id])

    return [item, loading];
};

export default useDetails;