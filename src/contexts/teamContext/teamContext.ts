import { createContext } from "react";

import { ITeamProvider } from "../InterFace/contextInterface";

const initialValue: ITeamProvider = {
    setProjectId: () => { },
    closeTeamOverlay: () => { },
    openOverlay: () => { },
    isNewMemberOpen: false,
    projectId: '',
}

const TeamContext = createContext(initialValue);

export default TeamContext;