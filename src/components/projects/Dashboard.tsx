import { useContext, useEffect } from "react";
import UserContext from "../../contexts/user-context/userContext";

function Dashboard() {

    const { setHeaderTitle } = useContext(UserContext);

    useEffect(() => {
        setHeaderTitle('Dashboard');
    });

    return (
        <div>
            Dashboard
        </div>
    );
};

export default Dashboard;
