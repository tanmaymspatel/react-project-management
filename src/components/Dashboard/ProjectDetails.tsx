import ProjectDetailsCard from "./ProjectDetailsCard";
/**
 * @returns project details component which is used in dashboard
 */
function ProjectDetails({ projectDuration, projectCost }: any) {
    return (
        <div className="card p-3">
            < ProjectDetailsCard
                projectDetail={projectDuration}
                iconColor="text-secondary"
                icon="icon-time"
                borderBottom={true}
                title="Duration"
            />
            < ProjectDetailsCard
                projectDetail={projectCost}
                iconColor="text-success"
                icon="icon-rupee"
                borderBottom={false}
                title="Cost" />
        </div>
    );
};

export default ProjectDetails;
