import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import UserContext from "../../contexts/user-context/userContext";
import coreServices from "../../core/services/coreServices";
import projectServices from "../../services/projectServices";
import Button from "../../shared/components/UI/Button";
import utlityServices from "../../shared/services/utilityServices";
import { IProjectFormDetails } from "./models/formValues";
import ProjectDetails from "./ProjectDetails";

/**
 * @name Project
 * @returns Assigned projects to the logged in user
 */
function Project() {
    const [projectId, setprojectId] = useState([])
    const { getCurrentUSer } = coreServices;
    const email: string | null = localStorage.getItem('email');
    /**
     * @description set project ids associated with the logged in user 
     */
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
    const [currentProjects, setCurrentProjects] = useState<IProjectFormDetails[]>([])
    /**
     * @description remove active link from 'project' navlink, when the active link is other then 'projects'
     */
    const { removeProjectsActiveClass } = utlityServices;
    /**
     * @name getUserProjectData
     * @description to get the project details in form of array of objects of the current logged in user
     * @description useCallback : to prevent unnecessary rendering of the function everytime component loads
     */
    const getUserProjectData = useCallback(async () => {
        try {
            const projectDetails: any = [];
            projectId?.forEach((projectId: string) => {
                projectDetails.push(getProjectDetailsById((projectId)));
            });
            /**
             * @description Store the data of project details after promise is resolved 
             */
            const resolvedProjectData: IProjectFormDetails[] = await Promise.all(projectDetails);
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
     * @description To set the header title when the component is loaded, get details project of logged in user
     */
    useEffect(() => {
        setHeaderTitle('Projects');
        getUserProjectData();
        removeProjectsActiveClass(id);
    }, [getUserProjectData, setHeaderTitle, removeProjectsActiveClass, id]);

    const projectCards = currentProjects.map((project: IProjectFormDetails) => {
        return (
            <ProjectDetails id={project.id} key={project.id} projectName={project.projectName} description={project.description} duration={project.duration} cost={project.cost} />
        )
    });

    return (
        <div className="overflow-y-auto px-2 px-sm-3 p-xl-4">
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
