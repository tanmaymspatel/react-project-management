import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, Outlet } from "react-router-dom"
/**
 * 
 * @returns A component of protected route 
 */
function ProtectedRoute() {

    const { isAuthenticated } = useAuth0();
    return (
        isAuthenticated ? <Outlet /> : <Navigate to='/login' />
    )
}

export default ProtectedRoute
