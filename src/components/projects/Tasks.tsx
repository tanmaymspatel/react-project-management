import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../../contexts/user-context/userContext";
import utlityServices from "../../shared/services/utilityServices";

/**
 * @name Tasks
 * @returns Tasks of a selected id of a project
 */
function Tasks() {
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
        setHeaderTitle('Tasks');
        removeProjectsActiveClass(id);
        return () => { };
    });

    return (
        <div>
            Tasks
        </div>
    )
};

export default Tasks
