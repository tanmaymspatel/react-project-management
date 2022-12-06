import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import coreServices from "../../core/services/coreServices";
import projectServices from "../../services/projectServices";
import { ProjectFormDetails } from "./models/formValues";

/**
 * @returns project cards of the logged in user
 */
function ProjectDetails(props: ProjectFormDetails) {
    let [projectId, setprojectId] = useState<string[]>([]);
    const [currentUser, setCurrentUSer] = useState([]);
    const navigate = useNavigate();
    const { deleteProjectDetailsById } = projectServices;
    const { getCurrentUSer, addNewUser } = coreServices;
    /***
     * @description email of the logged in user
     */
    const email: any = localStorage.getItem('email');
    /**
     * @description setting the details of the loggedin user and project ids 
     */
    const getLoggedUser = useCallback(async (email: any) => {
        getCurrentUSer(email)
            .then(res => {
                setCurrentUSer(res.data[0]);
                setprojectId(res.data[0].projectId);
            })
    }, [getCurrentUSer]);
    /**
     * @description data of logged in user
     */
    useEffect(() => {
        getLoggedUser(email);
    }, [email, getLoggedUser]);
    /**
     * @param id id of the project which is clicked 
     */
    const onProjectClick = (id: any) => {
        navigate(`${id}/dashboard`);
    }
    /**
     * @description navigate to from when the edit button is clicked
     * @param id id of the project of which the data is to be edited
     */
    const editProjectHandler = (id: string | undefined) => {
        navigate(`edit-project/${id}`)
    }
    /**
     * @description deleting the project according to id
     * @description removing the id of project form the loggedin user object and edit the user
     * @param id id of project, which is to be deleted
     */
    const deleteProjectHandler = async (id: any) => {
        await deleteProjectDetailsById(id);
        const idToBeRemoved = projectId.indexOf(id);
        projectId.splice(idToBeRemoved, 1)
        const modifiedUser = { ...currentUser, projectId };
        await addNewUser(modifiedUser);
        await getLoggedUser(email);
    }
    /**
     * @description project duration data from the props
     */
    const projectDuration: string = props?.duration ? props?.duration : "N/A";

    return (
        <div className="project-card col-sm-6 project-card col-xxl-4 position-relative">
            <div className="card bg-light p-4 cursor-pointer transition" onClick={() => onProjectClick(props?.id)}>
                <h4 className="pb-2">{props?.projectName}</h4>
                <p>{props?.description}</p>
                <p className="text-end">
                    <span className="icon-duration text-success"></span>
                    <span className="ps-2 project-duration">{projectDuration}</span>
                </p>
            </div>
            <div className="project-actions transition position-absolute">
                <span className="cursor-pointer icon icon-edit text-secondary p-1" onClick={() => editProjectHandler(props.id)}></span>
                <span className="cursor-pointer icon icon-delete text-danger p-1 ms-2" onClick={() => deleteProjectHandler(props.id)}></span>
            </div>
        </div>
    )
}

export default ProjectDetails;
