import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth";
import useSeller from "../hook/useSeller";


const SellerRoutes = ({children}) => {
    const [user, loading] = useAuth();
    const [isSeller, isSellerLoading] = useSeller();
    
    const location = useLocation();

    
    if(loading || isSellerLoading){
        return <span className="loading loading-bars loading-lg"></span>
    }
    if(user && isSeller){
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default SellerRoutes;