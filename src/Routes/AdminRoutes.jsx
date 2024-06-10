import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hook/useAdmin";
import useAuth from "../hook/useAuth";


const AdminRoutes = ({children}) => {
    const [user, loading] = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    
    const location = useLocation();

    
    if(loading || isAdminLoading){
        return <span className="loading loading-bars loading-lg"></span>
    }
    if(user && isAdmin){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default AdminRoutes;