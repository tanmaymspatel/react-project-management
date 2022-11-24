import { useContext, useEffect } from "react";
import UserContext from "../../contexts/user-context/userContext";

function Project() {
    const { setHeaderTitle } = useContext(UserContext);

    useEffect(() => {
        setHeaderTitle('Projects');
    });
    return (
        <div>
            Projects page
        </div>
    )
}

export default Project;
