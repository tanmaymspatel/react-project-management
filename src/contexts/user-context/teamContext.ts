import { createContext } from "react";

const TeamContext = createContext({
    setProjectId: (id: any) => { },
    closeOverlay: () => { },
    openOverlay: () => { },
    isNewMemberOpen: false,
    projectId: '',
});

export default TeamContext;