import { useEffect, useState } from "react";


const useDetails = (_id) => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch(`http://localhost:5000/menu/${_id}`)
        .then(res => res.json())
        .then(data => {
        setItem(data);
        setLoading(false);
        });
    }, [_id])

    return [item, loading];
};

export default useDetails;