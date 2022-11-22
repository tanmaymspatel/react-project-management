import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import Button from "../../shared/components/UI/Button";


function Master() {

    const { logout, user, isLoading } = useAuth0();

    useEffect(() => {
        console.log(user)
    })

    if (isLoading) {
        return <h6>Loading...</h6>
    }

    return (
        <div>
            <Button type='button' className="my-2 btn btn-secondary" handleClick={() => logout({ returnTo: window.location.origin })}>Logout</Button>
        </div>
    );
};

export default Master;
