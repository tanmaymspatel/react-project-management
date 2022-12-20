import { useCallback, useContext, useEffect, useState } from "react";

import utlityServices from "../../shared/services/utilityServices";
import UserContext from "../../contexts/user-context/userContext";
import { useParams } from "react-router-dom";
import projectServices from "../../services/projectServices";
import Button from "../../shared/components/UI/Button";
import TeamContext from "../../contexts/user-context/teamContext";
import AddTeamMember from "./AddTeamMember";
import { TeamMemberDetails } from "../projects/models/formValues";

/**
 * @name Tasks
 * @returns Tasks of a selected id of a project
 */
function Teams() {
    /**
     * @description project id which is clicked
     */
    const { id } = useParams();

    const { openOverlay, setProjectId, isNewMemberOpen } = useContext(TeamContext);
    /**
     * @description Set the title of header to "Dashboard" when click on the dashboard link
     */
    const { setHeaderTitle } = useContext(UserContext);
    /**
     * @description Remove active class from projects link when the dashboard link is selected
     */
    const { removeProjectsActiveClass } = utlityServices;
    /**
     * @description To set the header title and remove active class when the component is loaded
     */
    const { getProjectDetailsById, getTeamsById, updateTeamDetails } = projectServices;
    useEffect(() => {
        setHeaderTitle('Teams');
        removeProjectsActiveClass(id);
        setProjectId(id);
    }, [id, removeProjectsActiveClass, setHeaderTitle, setProjectId]);

    const [teamMembers, setTeamMembers] = useState<any[]>([]);
    const [planningMemberList, setPlanningMemberList] = useState<any>([]);
    const [designMemberList, setDesignMemberList] = useState<any>([]);
    const [developmentMemberList, setDevelopmentMemberList] = useState<any>([]);
    const [testingMemberList, setTestingMemberList] = useState<any>([]);
    const [teamId, setTeamId] = useState('');

    const getTeamList = useCallback(async () => {
        getProjectDetailsById(id as string).then(res => {
            setTeamId(res.data.teamId);
        });
        const data = await getTeamsById(teamId);
        const teamData = await data.data;
        setTeamMembers(teamData.members);
        setPlanningMemberList(teamMembers?.filter((list: any) => list.department === "plannng"))
        setDesignMemberList(teamMembers?.filter((list: any) => list.department === "Design"))
        setDevelopmentMemberList(teamMembers?.filter((list: any) => list.department === "development"))
        setTestingMemberList(teamMembers?.filter((list: any) => list.department === "Testing"))
    }, [getProjectDetailsById, id, teamId, getTeamsById]);

    useEffect(() => {
        getTeamList();
    }, [getTeamList]);


    let teamMemberList = teamMembers?.map(item => item.teamMembers);
    teamMemberList = teamMemberList?.flat(1);

    const getMaxId = (teamList: any) => {
        return Math?.max(...teamList?.map((task: any) => task?.id));
    }

    const modifyTeamDetails = async (values: TeamMemberDetails) => {

        switch (values.designation) {
            case 'planning':
                let list = planningMemberList?.map((item: any) => item?.teamMembers);
                list = list?.flat();
                const maxId = getMaxId(list);
                list?.splice(list?.length, 0, { id: maxId + 1, ...values })
                let newDepObj = planningMemberList[0]
                newDepObj = { ...newDepObj, teamMembers: list };
                const index = teamMembers.findIndex(item => item.department === newDepObj.department)
                teamMembers.splice(index, 1, newDepObj);
                const updatedTeamDetails = ({ id: teamId, members: teamMembers });
                console.log({ updatedTeamDetails }, { teamMembers });
                setTeamMembers(teamMembers);
            // await updateTeamDetails(teamId, updatedTeamDetails);
        }
    }

    const teamMemberData = teamMemberList?.map((member, index) => {
        return (
            <tr key={index}>
                <td>
                    <figure className="default-avatar rounded-circle m-0">
                        <img src={member?.profilePicture} alt="profile" title="profile image" />
                    </figure>
                </td>
                <td>{member?.name}</td>
                <td>{member?.emailId}</td>
                <td>{member?.designation}</td>
                <td>{member?.status}</td>
            </tr>
        );
    });

    return (
        <div className="h-100 p-4">
            <div className="text-end pb-3 mb-2">
                <Button className="btn btn-secondary" type="button" handleClick={openOverlay}><span className="me-1">+</span>Add Member</Button>
                {isNewMemberOpen ? <AddTeamMember modifyTeamDetails={modifyTeamDetails} /> : null}
            </div>
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
        </div>
    );
};

export default Teams;
