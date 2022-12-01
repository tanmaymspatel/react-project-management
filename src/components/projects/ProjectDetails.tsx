import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/user-context/userContext";
import projectServices from "../../services/projectServices";
import { ProjectFormDetails } from "./models/formValues";

function ProjectDetails(props: ProjectFormDetails) {
    const { currentUser } = useContext(UserContext);
    // let projectId = currentUser.projectId;

    const { deleteProjectDetailsById, editedProject } = projectServices;

    const navigate = useNavigate();
    const onProjectClick = (id: any) => {
        navigate(`${id}/dashboard`);
    }
    const editProjectHandler = (project: ProjectFormDetails) => {
        console.log(project);
    }
    const deleteProjectHandler = async (id: string | undefined) => {
        await deleteProjectDetailsById(id);
        // projectId = projectId.filter((res: ProjectFormDetails) => !res.id);
        // const modifiedUer = { ...currentUser, projectId };
        // console.log(modifiedUer);
        // await editedProject(currentUser.id, modifiedUer);
    }
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
                <span className="cursor-pointer icon icon-edit text-secondary p-1" onClick={() => editProjectHandler(props)}></span>
                <span className="cursor-pointer icon icon-delete text-danger p-1 ms-2" onClick={() => deleteProjectHandler(props.id)}></span>
            </div>
        </div>
    )
}

export default ProjectDetails;
