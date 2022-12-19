import { useState } from "react";

import TeamContext from "./teamContext"

type TeamContextProviderProps = {
    children: React.ReactNode
};

function TeamContextProvider({ children }: TeamContextProviderProps) {
    const [projectId, setProjectId] = useState('');
    const [isNewMemberOpen, setIsNewMemberOpen] = useState(false);

    const closeOverlay = () => {
        setIsNewMemberOpen(false);
    };

    const openOverlay = () => {
        setIsNewMemberOpen(true);
    };

    const teamCtx = {
        setProjectId,
        closeOverlay,
        openOverlay,
        isNewMemberOpen,
        projectId
    };

    return (
        <TeamContext.Provider value={teamCtx}>
            {children}
        </TeamContext.Provider>
    )
}

export default TeamContextProvider;
