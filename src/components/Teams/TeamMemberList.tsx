import { useContext, useEffect, useRef } from "react";
import { SearchContext } from "../../contexts/searchContext/searchContext";
import Loader from "../../shared/components/UI/Loader";
import useDragDrop from "../Hooks/useDragDrop";
import { IMemberDetails } from "./model/teamDetails";

import TeamRow from "./TeamRow";

interface ITeamMemberListProps {
    teamMemberList: IMemberDetails[],
    setTeamList: (newList: IMemberDetails[]) => void
}

function TeamMemberList({ teamMemberList, setTeamList }: ITeamMemberListProps) {
    /**
     * @description Using the properties of the custom drag and drop hook
     */
    // const [dragging, draggingItemIndex, handleDragStart, handleDragEnter, handleDragEnd, newList] = useDragDrop(teamMemberList as IMemberDetails[],);

    // useEffect(()=>{
    //     setTeamList(newList)
    // },[newList])

    const { searchText, searchByDept } = useContext(SearchContext);

    useEffect(() => {
        console.log(searchText);
        console.log(searchByDept);
    }, [searchText, searchByDept]);

    const draggingItem = useRef<any>(null);
    const dragOverItem = useRef<any>(null);

    const handleDragStart = (e: any, position: any) => {
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
    };

    const teamMemberCards = teamMemberList?.map((member: IMemberDetails, index: number) => {
        return (
            <div className="col-sm-6" key={index}>
                <div className="card py-3 px-3">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="col-5">
                            <figure className="default-avatar rounded-circle m-0">
                                <img src={member?.profilePicture} alt="profile" title="profile image" />
                            </figure>
                            <span>{member?.status}</span>
                        </div>
                        <div className="col-7">
                            <h5 className="fs-6 fw-bold">{member?.name}</h5>
                            <h6 className="text-nowrap">{member?.designation}</h6>
                            <h6>{member?.emailId}</h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    const teamMemberData = teamMemberList?.map((member: IMemberDetails, index: number) => {
        return (
            <tr
                key={index}
                draggable
                onDragStart={(e) => handleDragStart(e, index)}
                onDragEnter={(e) => handleDragEnter(e, index)}
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
    });

    if (teamMemberList?.length === 0) return <Loader />;

    return (
        <div className="overflow-y-auto h-100 px-1">
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
                    {teamMemberData}
                </tbody>
            </table>
            <div className="d-md-none mx-sm-3">
                <div className="row g-3">
                    {teamMemberCards}
                </div>
            </div>
        </div>
    )
}

export default TeamMemberList
