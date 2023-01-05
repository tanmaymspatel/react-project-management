import { useCallback, useContext, useEffect, useMemo } from "react";
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

    // const getSearchListByText = useCallback(() => {

    //     if (searchText) {
    //         let arr: IMemberDetails[] = []
    //         teamMemberList.forEach(member => {
    //             if (member.name.toLowerCase().includes(searchText.toLowerCase())) {
    //                 arr.push(member);
    //             }
    //         })
    //         // setTeamList(arr);
    //         console.log(arr);
    //     }
    // }, [teamMemberList, searchText]);

    // useEffect(() => {
    //     getSearchListByText()
    // }, [getSearchListByText]);

    // const getListByDepartment = useCallback(() => {
    //     if (searchByDept) {
    //         console.log(teamMemberList.filter(member => member.designation.toLowerCase() === searchByDept.toLowerCase()));
    //         // setTeamList(teamMemberList.filter(member => member.designation.toLowerCase() === searchByDept.toLowerCase()));
    //     }
    // }, [searchByDept, teamMemberList]);

    // useEffect(() => {
    //     getListByDepartment();
    // }, [getListByDepartment]);

    /**
     * @description list filtering logic
     */
    const filteredData = useCallback(() => {
        if (searchByDept || searchText) {
            return teamMemberList.filter(member => {
                if (searchByDept) {
                    return member.designation === searchByDept;
                }
                else return teamMemberList;
            })
                .filter(member => {
                    if (searchText) {
                        return member.name.toLowerCase().includes(searchText.toLowerCase());
                    } else return teamMemberList;
                })
        } else return teamMemberList;
    }, [teamMemberList, searchByDept, searchText]);
    /**
     * @description stroring the filter data
     */
    const newList = useMemo(() => {
        return filteredData();
    }, [filteredData]);
    /**
     * @description setting the filtered data
     */
    const setList = useCallback(() => {
        if (newList) setTeamList(newList);
    }, [newList, setTeamList])

    useEffect(() => {
        setList();
    }, [setList])


    // const setNewMemberList = useCallback(() => {
    //     if (searchByDept || searchText) {
    //         const newList: IMemberDetails[] | undefined = filteredData()
    //         setTeamList(newList as IMemberDetails[]);
    //         // console.log(newList);
    //     }
    // }, [searchByDept, searchText, setTeamList, filteredData]);

    // useEffect(() => {
    //     setNewMemberList()
    // }, [setNewMemberList]);

    if (teamMemberList?.length === 0) return <Loader />;

    return (
        <div className="overflow-y-auto h-100 px-1">
            <div>
                <TeamMemberTable teamMemberList={teamMemberList} setTeamList={setTeamList} />
            </div>

            <div className="d-md-none mx-sm-3">
                <div className="row g-3">
                    <TeamMemberCards teamMemberList={teamMemberList} />
                </div>
            </div>
        </div>
    )
};

export default TeamMemberList;
