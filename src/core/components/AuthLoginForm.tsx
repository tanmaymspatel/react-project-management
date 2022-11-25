import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../shared/components/UI/Button";
import Loader from "../../shared/components/UI/Loader";

/**
 * @returns Login functionality of Auth0
 */
function AuthLoginForm() {

    /**
     * @description To navigate in the application
     */
    const navigate = useNavigate();

    /**
     * @description Methods destructured from useAuth0() hook
     */
    const { loginWithRedirect, isLoading, isAuthenticated, user } = useAuth0();

    /**
     * @description name of the logged in user
     */
    const name = user?.nickname;

    /**
     * @description Redirect to projects page, if the user is logged in
     */
    useEffect(() => {
        if (isAuthenticated) {
            navigate(`/${name}/projects`)
        }
    });

    /**
     * @description Shows loader when the component is loading
     */
    if (isLoading) {
        return <Loader />
    }

    return (
        <div className="h-100 d-flex flex-column justify-content-center align-items-center px-3 px-lg-5">
            <h4 className="py-md-3 login-text">{!isAuthenticated ? 'Please Login to Continue!' : 'Welcome!'} </h4>
            {!isAuthenticated ? <Button type='button' className="btn btn-secondary" handleClick={() => loginWithRedirect()}>Login</Button> : null}
        </div>
    );
};

export default AuthLoginForm;
