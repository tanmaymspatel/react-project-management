import { useContext, useEffect } from "react";

import utlityServices from "../../shared/services/utilityServices";
import UserContext from "../../contexts/user-context/userContext";
import { useParams } from "react-router-dom";

/**
 * @name Dasboard
 * @returns Dashboard of a selected id of a project
 */
function Dashboard() {
    /**
     * @description project id which is clicked
     */
    const { id } = useParams();
    /**
     * @description Set the title of header to "Dashboard" when click on the dashboard link
     */
    const { setHeaderTitle } = useContext(UserContext);
    /**
     * @description Remove active class from projects link when the dashboard link is selected
     */
    const { removeProjectsActiveClass } = utlityServices;

    /**
     * @description To set the header title and remove active class when the component is loaded
     */
    useEffect(() => {
        setHeaderTitle('Dashboard');
        removeProjectsActiveClass(id);
        return () => { };
    });

    return (
        <div className="h-100 d-flex justify-content-center align-items-center">
            <h2> We are working on Dashboard! Stay connected!</h2>
        </div>
    );
};

export default Dashboard;
