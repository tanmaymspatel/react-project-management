import { useContext, useEffect } from "react";
import UserContext from "../../contexts/user-context/userContext";

function Teams() {

    const { setHeaderTitle } = useContext(UserContext);

    useEffect(() => {
        setHeaderTitle('Teams');
    });


    return (
        <div>
            Teams
        </div>
    )
};

export default Teams;
