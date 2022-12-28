import { useCallback, useEffect, useState } from "react";
import projectServices from "../../services/projectServices";
import { IMemberDetails, ITeamDepartment, ITeamDetails } from "../Teams/model/teamDetails";
/**
 * @name useTeam
 * @description custom hook for getting the details of the teammembers
 * @param id id of the clicked project
 * @returns 
 */
function useTeam(id: string) {

    const { getProjectDetailsById, getTeamsById } = projectServices;

    const [teamMembers, setTeamMembers] = useState<any[]>([]);
    const [teamData, setTeamData] = useState<ITeamDetails[]>([]);
    const [planningMemberList, setPlanningMemberList] = useState<IMemberDetails[]>([]);
    const [designMemberList, setDesignMemberList] = useState<IMemberDetails[]>([]);
    const [developmentMemberList, setDevelopmentMemberList] = useState<IMemberDetails[]>([]);
    const [testingMemberList, setTestingMemberList] = useState<IMemberDetails[]>([]);
    const [teamMemberList, setTeamMemberList] = useState<IMemberDetails[]>([]);
    const [teamId, setTeamId] = useState('');
    /**
     * @name getTeamList
     * @description get data of the team from the id of the clicked project
     */
    const getTeamList = useCallback(async () => {
        getProjectDetailsById(id as string).then((res: any) => {
            setTeamId(res.data.teamId);
        });
        const data = await getTeamsById(teamId);
        const teamData = await data.data;
        setTeamData(teamData);
        setTeamMembers(teamData.members);
    }, [getProjectDetailsById, id, teamId, getTeamsById]);

    useEffect(() => {
        getTeamList();
    }, [getTeamList]);
    /**
     * @name setList
     * @description set the value of each department list-planning, design, development, testing etc
     */
    const setList = useCallback(() => {
        setPlanningMemberList(teamMembers?.filter((list: ITeamDepartment) => list.department === "plannng"))
        setDesignMemberList(teamMembers?.filter((list: ITeamDepartment) => list.department === "Design"))
        setDevelopmentMemberList(teamMembers?.filter((list: ITeamDepartment) => list.department === "development"))
        setTestingMemberList(teamMembers?.filter((list: ITeamDepartment) => list.department === "Testing"))
        let teamList = teamMembers?.map(item => item.teamMembers);
        teamList = teamList?.flat(1);
        setTeamMemberList(teamList);
    }, [teamMembers]);

    useEffect(() => {
        setList();
    }, [setList])

    return [teamMembers, setTeamMembers, teamMemberList, setTeamMemberList, teamData, teamId, planningMemberList, designMemberList, developmentMemberList, testingMemberList, getTeamList] as const;
}

export default useTeam
