import { useContext, useEffect } from "react";

import { SearchContext } from "../../contexts/searchContext/searchContext";
import Loader from "../../shared/components/UI/Loader";
import { IMemberDetails } from "./model/teamDetails";
import TeamMemberCards from "./TeamMemberCards";
import TeamMemberTable from "./TeamMemberTable";

interface ITeamMemberListProps {
    teamMemberList: IMemberDetails[],
    setTeamList: (newList: IMemberDetails[]) => void
}

function TeamMemberList({ teamMemberList, setTeamList }: ITeamMemberListProps) {

    const { searchText, searchByDept } = useContext(SearchContext);

    useEffect(() => {
        console.log(searchText);
        console.log(searchByDept);
    }, [searchText, searchByDept]);

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
