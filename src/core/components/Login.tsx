import AuthLoginForm from "./AuthLoginForm";
import LoginImage from "./LoginImage";

/**
 * @name Login
 * @returns Login page for user authentication 
 */
function Login() {
    return (
        <div className="h-100 row g-0">
            <div className="col-7 h-100">
                <LoginImage />
            </div>
            <div className="col-5 h-100">
                <AuthLoginForm />
            </div>
        </div>
    )
};

export default Login;

