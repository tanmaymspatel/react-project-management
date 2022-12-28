import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import coreServices from "../../core/services/coreServices";
import projectServices from "../../services/projectServices";
import { IProjectFormDetails } from "./models/formValues";
import { IUserDetails } from "./models/user.model";

/**
 * @returns project cards of the logged in user
 */
function ProjectDetails(props: IProjectFormDetails) {
    let [projectId, setprojectId] = useState<string[]>([]);
    const [currentUser, setCurrentUSer] = useState<IUserDetails>({} as IUserDetails);
    const navigate = useNavigate();
    const { getCurrentUSer } = coreServices;
    /***
     * @description email of the logged in user
     */
    const email: string | null = localStorage.getItem('email');
    /**
     * @description setting the details of the loggedin user and project ids 
     */
    const getLoggedUser = useCallback(async (email: string) => {
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
        getLoggedUser(email as string);
    }, [email, getLoggedUser]);
    /**
     * @param id id of the project which is clicked 
     */
    const onProjectClick = (id: string) => {
        navigate(`${id}/dashboard`);
    }
    /**
     * @description navigate to from when the edit button is clicked
     * @param id id of the project of which the data is to be edited
     */
    const editProjectHandler = (id: string) => {
        navigate(`edit-project/${id}`)
    }
    /**
     * @description project duration data from the props
     */
    const projectDuration: string = props?.duration ? props?.duration : "N/A";

    return (
        <div className="project-card col-sm-6 project-card col-xxl-4 position-relative">
            <div className="card bg-light p-4 cursor-pointer transition" onClick={() => onProjectClick(props?.id as string)}>
                <h4 className="pb-2">{props?.projectName}</h4>
                <p>{props?.description}</p>
                <p className="text-end">
                    <span className="icon-duration text-success"></span>
                    <span className="ps-2 project-duration">{projectDuration}</span>
                </p>
            </div>
            <div className="project-actions transition position-absolute">
                <span className="cursor-pointer icon icon-edit text-secondary p-1" onClick={() => editProjectHandler(props.id as string)}></span>
            </div>
        </div>
    )
}

export default ProjectDetails;
