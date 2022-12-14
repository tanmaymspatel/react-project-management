import StatusCard from "./StatusCard";
import DashboardStates from "./dashBoardStates";

const statusCards = DashboardStates.map(card => <StatusCard key={card.phase} phase={card.phase} progress={card.progress} status={card.status} />)

function ProjectStatus() {
    return (
        <div className="row g-0 card flex-row py-2">
            {statusCards}
        </div>
    )
}

export default ProjectStatus;
