import { useNavigate } from "react-router-dom";
import { ProjectFormDetails } from "./models/formValues";

function ProjectDetails(props: ProjectFormDetails) {

    const navigate = useNavigate()

    const onProjectClick = (id: any) => {
        navigate(`${id}/dashboard`);
    }

    return (
        <div className="col-sm-6 project-card col-xxl-4 position-relative">
            <div className="card bg-light p-4 cursor-pointer transition" onClick={() => onProjectClick(props?.id)}>
                <h4 className="pb-2">{props?.projectName}</h4>
                <p>{props?.description}</p>
                <p className="text-end">
                    <span className="icon-duration text-success"></span>
                    <span className="ps-2 project-duration">{props?.duration}</span>
                </p>
            </div>
        </div>
    )
}

export default ProjectDetails
