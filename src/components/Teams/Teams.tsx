import { useCallback, useContext, useEffect, useState } from "react";

import utlityServices from "../../shared/services/utilityServices";
import UserContext from "../../contexts/user-context/userContext";
import { useParams } from "react-router-dom";
import projectServices from "../../services/projectServices";

/**
 * @name Tasks
 * @returns Tasks of a selected id of a project
 */
function Teams() {
    /**
     * @description project id which is clicked
     */
    const { id } = useParams();
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
    useEffect(() => {
        setHeaderTitle('Teams');
        removeProjectsActiveClass(id);
        return () => { };
    });

    const [teamMembers, setTeamMembers] = useState<any[]>([]);
    const [teamId, setTeamId] = useState('');
    const { getProjectDetailsById, getTeamsById } = projectServices;

    const getTeamList = useCallback(async () => {
        getProjectDetailsById(id as string).then(res => {
            setTeamId(res.data.teamId);
        });
        const data = await getTeamsById(teamId);
        const teamData = await data.data;
        setTeamMembers(teamData.members);
    }, [getProjectDetailsById, id, teamId, getTeamsById]);

    useEffect(() => {
        getTeamList();
    }, [getTeamList]);

    let teamMemberList = teamMembers?.map(item => item.teamMembers);
    teamMemberList = teamMemberList?.flat(1);

    const teamMemberData = teamMemberList?.map(member => {
        return (
            <tr key={member?.name}>
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
        )
    })


    return (
        <div className="h-100 p-4">
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
    )
};

export default Teams;
