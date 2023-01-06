import React from "react";
import { IMemberDetails } from "./model/teamDetails";
import SingleTeamMemberCard from "./SingleTeamMemberCard";

interface ITeamMemberCardsProps {
    teamMemberList: IMemberDetails[]
}
/**
 * @returns A component to display team members in card form for mobile view 
 */
function TeamMemberCards({ teamMemberList }: ITeamMemberCardsProps) {

    const teamMemberCards = teamMemberList?.map((member: IMemberDetails, index: number) => {
        return (
            <SingleTeamMemberCard
                index={index}
                key={index}
                profilePicture={member?.profilePicture}
                status={member?.status}
                name={member?.name}
                designation={member?.designation}
                emailId={member?.emailId}
            />
        )
    });

    return (
        <>
            {teamMemberCards}
        </>
    )
};

export default React.memo(TeamMemberCards);
