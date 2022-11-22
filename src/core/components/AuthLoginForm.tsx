import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../shared/components/UI/Button";

function AuthLoginForm() {

    const navigate = useNavigate();

    console.log("login form");


    const { loginWithRedirect, isLoading, isAuthenticated } = useAuth0();

    useEffect(() => {
        console.log(isAuthenticated);

        if (isAuthenticated) {
            console.log('hi');
            navigate('/projects')
        }
    })

    return (
        <div className="h-100 d-flex flex-column justify-content-center align-items-center px-5">
            {isLoading && isAuthenticated ? <h4>Loading...</h4> : null}
            {!isAuthenticated && !isLoading ? <h4 className="py-3">Please Login to Continue!</h4> : <h4>Welcome!</h4>}
            {!isAuthenticated && !isLoading ? <Button type='button' className="btn btn-secondary" handleClick={() => loginWithRedirect()}>Login</Button> : null}
        </div>
    );
};

export default AuthLoginForm;
