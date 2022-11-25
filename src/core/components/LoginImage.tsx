import AuthLoginForm from "./AuthLoginForm";

/**
 * @name LoginImage
 * @returns A section with backgroung image
 */
function LoginImage() {
    return (
        <div className="login-image h-100 d-flex flex-column justify-content-evenly p-3">
            <h4 className="text-light p-3 p-md-5 text-center text-md-left">"Operations keeps the lights on, strategy provides a light at the end of the tunnel,
                but project management
                is the train engine that moves the organization forward."
            </h4>
            <h2 className="text-light text-end d-none d-md-block">
                - Joy Gumz
            </h2>
            <div className="d-md-none">
                {/* added a component of auth login form for responsiveness */}
                <AuthLoginForm />
            </div>
        </div>
    )
};

export default LoginImage;
