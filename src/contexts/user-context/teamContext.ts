import { createContext } from "react";
import { TeamMemberDetails } from "../../components/projects/models/formValues";

const TeamContext = createContext({
    setProjectId: (id: any) => { },
    closeOverlay: () => { },
    openOverlay: () => { },
    isNewMemberOpen: false,
    projectId: '',
    getMaxId: (list: any) => { }
});

export default TeamContext;