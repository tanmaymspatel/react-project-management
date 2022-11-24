import { useContext, useEffect } from "react";
import UserContext from "../../contexts/user-context/userContext";

function Tasks() {

    const { setHeaderTitle } = useContext(UserContext);

    useEffect(() => {
        setHeaderTitle('Tasks');
    });

    return (
        <div>
            Tasks
        </div>
    )
};

export default Tasks
