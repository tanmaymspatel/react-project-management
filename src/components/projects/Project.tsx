import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import UserContext from "../../contexts/user-context/userContext";
import coreServices from "../../core/services/coreServices";
import projectServices from "../../services/projectServices";
import Button from "../../shared/components/UI/Button";
import utlityServices from "../../shared/services/utilityServices";
import ProjectDetails from "./ProjectDetails";

/**
 * @name Project
 * @returns Assigned projects to the logged in user
 */
function Project() {
    const [projectId, setprojectId] = useState([])
    const { getCurrentUSer } = coreServices;

    const email: any = localStorage.getItem('email');

    useEffect(() => {
        if (email) {
            try {
                getCurrentUSer(email)
                    .then(res => {
                        setprojectId(res.data[0].projectId)
                    });
            }
            catch (err) {
                console.log(err);
            }
        }

    }, [email, getCurrentUSer])

    const navigate = useNavigate();
    /**
     * @description Set the title of header to "Dashboard" when click on the dashboard link
     */
    const { setHeaderTitle } = useContext(UserContext);
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
     * @name getUserProjectData
     * @description to get the project details in form of array of objects of the current logged in user
     * @description useCallback : to prevent unnecessary rendering of the function everytime component loads
     */
    // const projectId: any = [1, 2, 3];
    const getUserProjectData = useCallback(async () => {
        try {
            const projectDetails: any = [];
            projectId?.forEach((projectId: string) => {
                projectDetails.push(getProjectDetailsById((projectId)));
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
    }, [projectId, getProjectDetailsById,]);


    const navigateToForm = () => {
        navigate('add-project');
    }

    /**
     * @description To set the header title when the component is loaded, 
     */
    useEffect(() => {
        setHeaderTitle('Projects');
        getUserProjectData();
    }, [getUserProjectData, setHeaderTitle]);

    useEffect(() => {
        removeProjectsActiveClass(id);
    });

    const projectCards = currentProjects.map((project: any) => {
        return (
            <ProjectDetails id={project.id} key={project.id} projectName={project.projectName} description={project.description} duration={project.duration} cost={project.cost} />
        )
    });

    return (
        <div className="overflow-y-auto p-4">
            <div className="pb-4 text-end">
                <Button type='button' className="btn btn-secondary" handleClick={navigateToForm}>+ create Project</Button>
            </div>
            <div className="row g-4">
                {projectCards}
            </div>
        </div>
    )
}

export default Project;
