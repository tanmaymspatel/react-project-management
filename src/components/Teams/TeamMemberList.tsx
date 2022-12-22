import { useRef, useState } from "react";
import Loader from "../../shared/components/UI/Loader";

import { TeamMemberDetails } from "../projects/models/formValues";
import TeamRow from "./TeamRow";

function TeamMemberList({ teamMemberList, setTeamList }: any) {

    const [dragging, setDragging] = useState<boolean>(false)

    const draggingItem = useRef<any>(null);
    const dragOverItem = useRef<any>(null);

    const handleDragStart = (e: any, position: any) => {
        setDragging(true);
        draggingItem.current = position;
    };

    const handleDragEnter = (e: any, position: any) => {
        dragOverItem.current = position;
    };

    const handleDragEnd = (e: any) => {
        const listCopy = [...teamMemberList];
        const draggingItemContent = listCopy[draggingItem.current];
        listCopy.splice(draggingItem.current, 1);
        listCopy.splice(dragOverItem.current, 0, draggingItemContent);
        draggingItem.current = null;
        dragOverItem.current = null;
        setTeamList(listCopy);
        setDragging(false);
    };

    const teamMemberData = teamMemberList?.map((member: TeamMemberDetails, index: number) => {
        return (
            <tr
                key={index}
                draggable
                onDragStart={(e) => handleDragStart(e, index)}
                onDragEnter={(e) => handleDragEnter(e, index)}
                onDragEnd={handleDragEnd}
                onDragOver={(e) => e.preventDefault()}
                className={`${dragging && index === draggingItem.current ? "dragged-item" : "null"}`}
            >
                <TeamRow
                    profilePicture={member.profilePicture}
                    name={member.name}
                    emailId={member.emailId}
                    designation={member.designation}
                    status={member.status}
                />
            </tr>
        );
    });

    if (teamMemberList?.length === 0) return <Loader />;

    return (
        <div className="overflow-y-auto h-100 px-1">
            <table className="w-100 team-table table table-hover position-relative align-middle mb-0">
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
                    {teamMemberData}
                </tbody>
            </table>
        </div>
    )
}

export default TeamMemberList
