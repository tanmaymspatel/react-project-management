import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../contexts/searchContext/searchContext";
import Loader from "../../shared/components/UI/Loader";
import { IMemberDetails } from "./model/teamDetails";
import TeamMemberCards from "./TeamMemberCards";
import TeamMemberTable from "./TeamMemberTable";

interface ITeamMemberListProps {
    teamMemberList: IMemberDetails[],
    setTeamList: (newList: IMemberDetails[]) => void
}
/**
 * @returns Team member Details
 */
function TeamMemberList({ teamMemberList, setTeamList }: ITeamMemberListProps) {

    const { searchByDept, searchText } = useContext(SearchContext);
    //---------------------------------------------------------------- all in one ----------------------

    // /**
    //  * @description list filtering logic
    //  */
    // const filteredData = useCallback(() => {
    //     // console.log("filter");

    //     if (searchByDept || searchText) {
    //         return teamMemberList.filter(member => {
    //             if (searchByDept) {
    //                 return member.designation === searchByDept;
    //             }
    //             else return teamMemberList;
    //         })
    //             .filter(member => {
    //                 if (searchText) {
    //                     return member.name.toLowerCase().includes(searchText.toLowerCase());
    //                 } else return teamMemberList;
    //             })
    //     } else return teamMemberList;
    // }, [teamMemberList, searchByDept, searchText]);
    // /**
    //  * @description stroring the filter data
    //  */
    // const newList = useMemo(() => {
    //     return filteredData();
    // }, [filteredData]);
    // /**
    //  * @description setting the filtered data
    //  */
    // const setList = useCallback(() => {
    //     if (newList) setTeamList(newList);
    // }, [newList, setTeamList])

    // useEffect(() => {
    //     setList();
    // }, [setList])

    // let newList: IMemberDetails[] = []



    const [newList, setNewList] = useState<IMemberDetails[]>([])
    useEffect(() => {
        if (searchText) setNewList(teamMemberList?.filter(member => member.name.toLowerCase().includes(searchText.toLowerCase())))
    }, [teamMemberList, searchText,])


    useEffect(() => {
        if (searchByDept) setNewList(teamMemberList?.filter(member => member.designation.toLowerCase() === searchByDept.toLowerCase()))
    }, [teamMemberList, searchByDept])


    if (!teamMemberList?.length) return <Loader />;

    return (
        <div className="overflow-y-auto h-100 px-1">
            <div>
                <TeamMemberTable teamMemberList={searchText || searchByDept ? newList : teamMemberList} setTeamList={setTeamList} />
            </div>

            <div className="d-md-none mx-sm-3">
                <div className="row g-3">
                    <TeamMemberCards teamMemberList={searchText || searchByDept ? newList : teamMemberList} />
                </div>
            </div>
        </div>
    )
};

export default React.memo(TeamMemberList);
