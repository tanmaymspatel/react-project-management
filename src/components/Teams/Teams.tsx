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

    const { openOverlay, setProjectId, isNewMemberOpen, setTeamMemberTobeEdited, setIsEdit } = useContext(TeamContext);
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
    const [teamData, setTeamData] = useState<any>([]);
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
        setTeamData(teamData);
        setTeamMembers(teamData.members);

    }, [getProjectDetailsById, id, teamId, getTeamsById]);

    useEffect(() => {
        getTeamList();
    }, [getTeamList]);


    const setDeptList = useCallback(() => {
        setPlanningMemberList(teamMembers?.filter((list: any) => list.department === "plannng"))
        setDesignMemberList(teamMembers?.filter((list: any) => list.department === "Design"))
        setDevelopmentMemberList(teamMembers?.filter((list: any) => list.department === "development"))
        setTestingMemberList(teamMembers?.filter((list: any) => list.department === "Testing"))
    }, [teamMembers]);

    useEffect(() => {
        setDeptList();
    }, [setDeptList])

    let teamMemberList = teamMembers?.map(item => item.teamMembers);
    teamMemberList = teamMemberList?.flat(1);

    const editTeamDetails = (deptList: any, values: TeamMemberDetails) => {
        let list = deptList?.map((item: any) => item?.teamMembers);
        list = list?.flat();
        list?.splice(list?.length, 0, { id: list.length + 1, ...values })
        let newDepObj: any;
        newDepObj = deptList[0]
        newDepObj = { ...newDepObj, teamMembers: list };
        const index = teamMembers.findIndex(item => item.department === newDepObj.department)
        teamMembers.splice(index, 1, newDepObj);
        return teamMembers;
    }

    const modifyTeamDetails = async (values: TeamMemberDetails) => {

        switch (values.designation) {
            case 'Planning': {
                const newMembers = editTeamDetails(planningMemberList, values);
                setTeamMembers(newMembers);
                await updateTeamDetails(teamId, teamData);
                return;
            }

            case "Web designer": {
                const newMembers = editTeamDetails(designMemberList, values);
                setTeamMembers(newMembers);
                await updateTeamDetails(teamId, teamData);
                return;
            }

            case "Front-end Developer":
            case "Back-end Developer": {
                const newMembers = editTeamDetails(developmentMemberList, values);
                setTeamMembers(newMembers);
                await updateTeamDetails(teamId, teamData);
                return;
            }

            case "Tester": {
                const newMembers = editTeamDetails(testingMemberList, values);
                setTeamMembers(newMembers);
                await updateTeamDetails(teamId, teamData);
                return;
            }
        }
    }

    // const onEditHandler = (teamMember: TeamMemberDetails) => {
    //     openOverlay();
    //     setIsEdit(true);
    //     setTeamMemberTobeEdited(teamMember);
    // }

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
                {/* <td><span className="icon-edit text-secondary cursor-pointer" onClick={() => onEditHandler(member)}></span></td> */}
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
                            {/* <th>Action</th> */}
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
