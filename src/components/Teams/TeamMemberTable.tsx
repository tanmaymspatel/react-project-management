import React, { useCallback, useEffect } from "react";

import useDragDrop from "../Hooks/useDragDrop";
import { IMemberDetails } from "./model/teamDetails";
import TeamRow from "./TeamRow";

interface ITeamMemberTableProps {
    teamMemberList: IMemberDetails[],
    setTeamList: (newList: IMemberDetails[]) => void
}
/**
 * @returns A component to display the team member data in the tabular form 
 */
function TeamMemberTable({ teamMemberList, setTeamList }: ITeamMemberTableProps) {
    /**
     * @description Using the properties of the custom drag and drop hook
     */
    const [, , handleDragStart, handleDragEnter, handleDragEnd, newList] = useDragDrop(teamMemberList as IMemberDetails[]);
    /**
     * @name setDraggedList
     * @description set the new list when list item is dragged
     */
    const setDraggedList = useCallback(() => {
        if (newList) setTeamList(newList);
    }, [newList, setTeamList]);

    useEffect(() => {
        setDraggedList();
    }, [setDraggedList]);

    const teamMemberData = teamMemberList?.map((member: IMemberDetails, index: number) => {
        return (
            <tr
                key={index}
                draggable
                onDragStart={() => handleDragStart(index)}
                onDragEnter={() => handleDragEnter(index)}
                onDragEnd={handleDragEnd}
                onDragOver={(e) => e.preventDefault()}
            >
                <TeamRow
                    profilePicture={member?.profilePicture}
                    name={member?.name}
                    emailId={member?.emailId}
                    designation={member?.designation}
                    status={member?.status}
                />
            </tr>
        );
    })

    // if (!teamMemberList?.length) return <h5>No Records Found!</h5>

    return (
        <table className="w-100 team-table table table-hover position-relative align-middle mb-0 d-none d-md-table">
            <thead className="position-sticky top-0 bg-dark text-light">
                <tr>
                    <th>User</th>
                    <th>Name</th>
                    <th>Email Id</th>
                    <th>Designation</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {teamMemberList?.length ? teamMemberData
                    : <tr>
                        <td colSpan={5} className="text-center fs-4 border-0">No Records Found</td>
                    </tr>}
            </tbody>
        </table>
    )
};

export default React.memo(TeamMemberTable);