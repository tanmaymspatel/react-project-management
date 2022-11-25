import { useContext, useEffect } from "react";

import UserContext from "../../contexts/user-context/userContext";

/**
 *@name Project
 * @returns Assigned projects to the logged in user
 */
function Project() {

    /**
     * @description Set the title of header to "Dashboard" when click on the dashboard link
     */
    const { setHeaderTitle } = useContext(UserContext);

    /**
     * @description To set the header title when the component is loaded
     */
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
