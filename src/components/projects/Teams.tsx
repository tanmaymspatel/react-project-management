import { useContext, useEffect } from "react";

import utlityServices from "../../shared/services/utilityServices";
import UserContext from "../../contexts/user-context/userContext";
import { useParams } from "react-router-dom";

/**
 * @name Tasks
 * @returns Tasks of a selected id of a project
 */
function Teams() {
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
        setHeaderTitle('Teams');
        removeProjectsActiveClass(id);
        return () => { };
    });

    return (
        <div>
            Teams
        </div>
    )
};

export default Teams;
