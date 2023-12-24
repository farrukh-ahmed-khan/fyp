import { Navigate, Outlet } from "react-router-dom";
const ProtectedRoutes = ({auth}) => {
    
    return (auth === true ? <Outlet /> : <Navigate to="/" replace/>)
}
export default ProtectedRoutes;
