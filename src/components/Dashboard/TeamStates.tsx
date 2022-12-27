import { ITeamDepartment } from "../Teams/model/teamDetails";
import TeamCard from "./TeamCard";

interface ITeamStateProps {
    teamMembers: ITeamDepartment[]
}
/**
 * @returns team member statistics 
 */
function TeamStates({ teamMembers }: ITeamStateProps) {
    /**
     * @description all the team card with members' statistics
     */
    const teamCards = teamMembers?.map((team: any, index: any) => {
        return (
            <TeamCard
                key={index}
                department={team.department}
                teamMembers={team.teamMembers}
            />
        );
    });

    return (
        <div className="card row flex-row g-0 px-2 py-3">
            {teamCards}
        </div>
    );
};

export default TeamStates;


