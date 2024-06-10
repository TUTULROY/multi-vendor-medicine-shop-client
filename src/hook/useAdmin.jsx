import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
    const {user} = useAuth();

    const axiosSecure = useAxiosSecure();

    const {date: isAdmin, isLoading: isAdminLoading} = useQuery({

        queryKey: [user?.email, 'isAdmin'],

        queryFn: async() =>{
            if (!user?.email) return false;
            const res = await axiosSecure.get(`/users/admin/${user.email}`);

            // console.log(res.data);
            return res.data?.admin;
        },
        enabled: !!user?.email,
    })
    return [isAdmin, isAdminLoading];
};

export default useAdmin;