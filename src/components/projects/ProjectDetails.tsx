import { useNavigate } from "react-router-dom";

function ProjectDetails({ id, projectName, description, duration }: any) {

    const navigate = useNavigate()

    const onProjectClick = (id: any) => {
        navigate(`${id}/dashboard`);
    }

    return (
        <div className="col-sm-6 col-xxl-4" onClick={() => onProjectClick(id)}>
            <div className="card bg-light p-4 cursor-pointer transition">
                <h4 className="pb-2">{projectName}</h4>
                <p>{description}</p>
                <p className="text-end">
                    <span className="icon-duration text-success"></span>
                    <span className="ps-2 project-duration">{duration}</span>
                </p>
            </div>
        </div>
    )
}

export default ProjectDetails
