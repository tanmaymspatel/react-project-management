import { useContext, useEffect, useState } from "react";

import UserContext from "../../contexts/user-context/userContext";
import projectServices from "../../services/projectServices";
import ProjectDetails from "./ProjectDetails";
// import ProjectDetails from "./ProjectDetails";

/**
 *@name Project
 * @returns Assigned projects to the logged in user
 */
function Project() {
    /**
     * @description Set the title of header to "Dashboard" when click on the dashboard link
     */
    const { setHeaderTitle, currentUser } = useContext(UserContext);

    const { getProjectDetailsById } = projectServices;

    const [currentProjects, setProjects] = useState([])

    const { projectId } = currentUser;

    useEffect(() => {
        setHeaderTitle('Projects');
        let details: any = [];
        const getUserProjectData = async () => {
            console.log(projectId);
            projectId?.forEach((projectId: string) => {
                getProjectDetailsById((projectId)).then(res => {
                    console.log(res);
                    details.push(res.data)
                    setProjects(details);
                });
            });
            console.log(currentProjects)
            console.log(details);
        }
        getUserProjectData();
    }, []);

    /**
     * @description To set the header title when the component is loaded
     */

    const projectCards = currentProjects.map((project: any) => {
        return (
            <ProjectDetails key={project.id} projectName={project.projectName} description={project.description} duration={project.duration} />
        )
    })

    return (
        <div className="overflow-y-auto p-4">
            <div className="row g-4">
                {
                    projectCards
                }
            </div>
        </div>
    )
}

export default Project;
