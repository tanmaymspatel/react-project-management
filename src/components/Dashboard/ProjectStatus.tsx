import StatusCard from "./StatusCard";
import DashboardStates from "./dashBoardStates";

/**
 * @returns a row showing project status
*/
function ProjectStatus() {
    /**
     * @description cards which are to be randered in project status row
     */
    const statusCards = DashboardStates.map(card => <StatusCard key={card.phase} phase={card.phase} progress={card.progress} status={card.status} />)

    return (
        <div className="row g-0 card flex-row py-2">
            {statusCards}
        </div>
    )
}

export default ProjectStatus;
