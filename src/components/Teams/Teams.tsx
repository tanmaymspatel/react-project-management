import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import utlityServices from "../../shared/services/utilityServices";
import UserContext from "../../contexts/user-context/userContext";
import projectServices from "../../services/projectServices";
import Button from "../../shared/components/UI/Button";
import TeamContext from "../../contexts/teamContext/teamContext";
import AddTeamMember from "./AddTeamMember";
import TeamMemberList from "./TeamMemberList";
import useTeam from "../Hooks/useTeam";
import { IMemberDetails } from "./model/teamDetails";

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
    const { removeProjectsActiveClass, editTeamDetails } = utlityServices;
    /**
     * @description To set the header title and remove active class when the component is loaded
     */
    const { updateTeamDetails } = projectServices;
    /**
     * @description change header title, removeactive class if id is not there, set the id of the current project
     */
    useEffect(() => {
        setHeaderTitle('Teams');
        removeProjectsActiveClass(id);
        setProjectId(id as string);
    }, [id, removeProjectsActiveClass, setHeaderTitle, setProjectId]);
    /**
     * Using the useTeam custom hook
     */
    const [teamMembers, setTeamMembers, teamMemberList, setTeamMemberList, teamData, teamId, planningMemberList, designMemberList, developmentMemberList, testingMemberList, getTeamList] = useTeam(id as string);
    /**
     * @name modifyTeamDetails
     * @description use to add object of team deatails to their respective department
     * @param values member details object which is to be added in the team member list
     */
    const modifyTeamDetails = async (values: IMemberDetails) => {

        switch (values.designation) {
            case 'Planning': {
                // edit the team list after adding new object and set the team/members
                const newMembers = editTeamDetails(planningMemberList, values, teamMembers);
                setTeamMembers(newMembers);
                await updateTeamDetails(teamId, teamData);
                getTeamList();
                return;
            }

            case "Web designer": {
                const newMembers = editTeamDetails(designMemberList, values, teamMembers);
                setTeamMembers(newMembers);
                await updateTeamDetails(teamId, teamData);
                getTeamList();
                return;
            }

            case "Front-end Developer":
            case "Back-end Developer": {
                const newMembers = editTeamDetails(developmentMemberList, values, teamMembers);
                setTeamMembers(newMembers);
                await updateTeamDetails(teamId, teamData);
                getTeamList();
                return;
            }

            case "Tester": {
                const newMembers = editTeamDetails(testingMemberList, values, teamMembers);
                setTeamMembers(newMembers);
                await updateTeamDetails(teamId, teamData);
                getTeamList();
                return;
            }
        }
    }
    /**
     * @name setTeamList
     * @description Modifies the team list after dragging is done
     * @param newList new list after dragging the element
     */
    const setTeamList = (newList: IMemberDetails[]) => {
        setTeamMemberList(newList);
    }

    return (
        <div className="h-100 d-flex flex-column px-2 px-sm-3 p-xl-4">
            <div className="text-end pb-3 mb-2">
                <Button className="btn btn-secondary" type="button" handleClick={openOverlay}><span className="me-1">+</span>Add Member</Button>
                {isNewMemberOpen ? <AddTeamMember modifyTeamDetails={modifyTeamDetails} /> : null}
            </div>
            <TeamMemberList teamMemberList={teamMemberList} setTeamList={setTeamList} />
        </div>
    );
};

export default Teams;
