import { useAuth0 } from "@auth0/auth0-react";
import AuthLoginForm from "./AuthLoginForm";
import LoginImage from "./LoginImage";

/**
 * @name Login
 * @returns Login page for user authentication 
 */
function Login() {

    const { isLoading } = useAuth0();


    if (isLoading) {
        return <h4>Loading...</h4>
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

