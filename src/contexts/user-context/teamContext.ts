import { createContext } from "react";
import { TeamMemberDetails } from "../../components/projects/models/formValues";

const TeamContext = createContext({
    setProjectId: (id: any) => { },
    closeOverlay: () => { },
    openOverlay: () => { },
    isNewMemberOpen: false,
    projectId: '',
    getMaxId: (list: any) => { },
    teamMemberTobeEdited: {} as TeamMemberDetails,
    setTeamMemberTobeEdited: (task: TeamMemberDetails) => { },
    isEdit: false,
    setIsEdit: (value: any) => { }
});

export default TeamContext;