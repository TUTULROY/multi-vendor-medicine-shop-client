
import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://multi-vendor-medicine-shop-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;