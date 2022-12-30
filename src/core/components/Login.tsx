import { useAuth0 } from "@auth0/auth0-react";
import Loader from "../../shared/components/UI/Loader";
import AuthLoginForm from "./AuthLoginForm";
import LoginImage from "./LoginImage";

/**
 * @name Login
 * @returns Login page for user authentication 
 */
function Login() {
    /**
     * method destructuring from the useAuth0() hook
     */
    const { isLoading } = useAuth0();
    /**
     * @description Shows the loader when the component is loading
     */
    if (isLoading) {
        return < Loader />;
    }

    return (
        <div className="h-100 row g-0">
            <div className="col-md-7 h-100">
                <LoginImage />
            </div>
            <div className="col-md-5 h-100">
                <AuthLoginForm />
            </div>
        </div>
    )
};

export default Login;

