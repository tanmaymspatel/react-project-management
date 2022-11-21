import LoginForm from "./LoginForm";
import LoginImage from "./LoginImage";

function Login() {
    return (
        <div className="h-100 row g-0">
            <div className="col-7 h-100">
                <LoginImage />
            </div>
            <div className="col-5 h-100">
                <LoginForm />
            </div>
        </div>
    )
};

export default Login;

