import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import UserContext from "../../contexts/user-context/userContext";
import projectServices from "../../services/projectServices";
import Button from "../../shared/components/UI/Button";
import utlityServices from "../../shared/services/utilityServices";
import ProjectDetails from "./ProjectDetails";

/**
 *@name Project
 * @returns Assigned projects to the logged in user
 */
function Project() {
    const navigate = useNavigate();
    /**
     * @description Set the title of header to "Dashboard" when click on the dashboard link
     */
    const { setHeaderTitle, currentUser } = useContext(UserContext);
    /**
     *@description use to get the project details by its id 
     */
    const { getProjectDetailsById } = projectServices;
    /**
     * @description project id which is clicked
     */
    const { id } = useParams();
    /**
     * @description State for setting the projects list according to loggedin user
     */
    const [currentProjects, setCurrentProjects] = useState([])
    /**
     * @description remove active link from 'project' navlink, when the active link is other then 'projects'
     */
    const { removeProjectsActiveClass } = utlityServices;
    /**
     * @description project id associated with the logged in user
     */
    const { projectId } = currentUser;

    /**
     * @name getUserProjectData
     * @description to get the project details in form of array of objects of the current logged in user
     * @description useCallback : to prevent unnecessary rendering of the function everytime component loads
     */
    const getUserProjectData = useCallback(async () => {
        if (projectId) {
            try {
                const projectDetails: any = [];
                projectId?.forEach((projectId: string) => {
                    projectDetails.push(getProjectDetailsById((projectId)))
                    // getProjectDetailsById((projectId))
                    // .then(res => {
                    //     // console.log(res.data);
                    //     projectDetails.push(res.data)
                    //     // return projectDetails;
                    // });

                });
                /**
                 * @description Store the data of project details after promise is resolved 
                 */
                const resolvedProjectData: any = await Promise.all(projectDetails);
                const projectData = resolvedProjectData.map((el: any) => el.data);
                setCurrentProjects(projectData);
            } catch (err) {
                console.log(err);
            }
        }
    }, [projectId, getProjectDetailsById,]);


    /**
     * @description To set the header title when the component is loaded, 
     */
    useEffect(() => {
        setHeaderTitle('Projects');
        getUserProjectData();
    }, [getUserProjectData, setHeaderTitle]);

    useEffect(() => {
        removeProjectsActiveClass(id)
    });

    const projectCards = currentProjects.map((project: any) => {
        return (
            <ProjectDetails id={project.id} key={project.id} projectName={project.projectName} description={project.description} duration={project.duration} />
        )
    });

    return (
        <div className="overflow-y-auto p-4">
            <div className="pb-4 text-end">
                <Button type='button' className="btn btn-secondary" handleClick={() => { navigate('add-project') }}>+ create Project</Button>
            </div>
            <div className="row g-4">
                {projectCards}
            </div>
        </div>
    )
}

export default Project;
