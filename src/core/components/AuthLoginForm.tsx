import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../shared/components/UI/Button";

function AuthLoginForm() {

    const navigate = useNavigate();

    const { loginWithRedirect, isLoading, isAuthenticated } = useAuth0();

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/projects')
        }

        if (isLoading) {
            console.log('load');
        }
    })
    return (
        <div className="h-100 d-flex flex-column justify-content-center align-items-center px-3 px-lg-5">

            <h4 className="py-md-3 login-text">{!isAuthenticated ? 'Please Login to Continue!' : 'Welcome!'} </h4>
            {!isAuthenticated ? <Button type='button' className="btn btn-secondary" handleClick={() => loginWithRedirect()}>Login</Button> : null}
        </div>
    );
};

export default AuthLoginForm;
