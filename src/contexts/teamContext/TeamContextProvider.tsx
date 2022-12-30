import { useState } from "react";

import TeamContext from "./teamContext"

type TeamContextProviderProps = {
    children: React.ReactNode
};
/**
 * @returns a component to provide necessary functions and states 
 */
function TeamContextProvider({ children }: TeamContextProviderProps) {
    const [projectId, setProjectId] = useState('');
    const [isNewMemberOpen, setIsNewMemberOpen] = useState(false);
    /**
     * @description to close the task form overlay
     */
    const closeTeamOverlay = () => {
        setIsNewMemberOpen(false);
    };
    /**
     * @description to open the task form overlay
     */
    const openOverlay = () => {
        setIsNewMemberOpen(true);
    };
    /**
     * @description value to be consumed in the componens
     */
    const teamCtx = {
        setProjectId,
        closeTeamOverlay,
        openOverlay,
        isNewMemberOpen,
        projectId,
    };

    return (
        <TeamContext.Provider value={teamCtx}>
            {children}
        </TeamContext.Provider>
    )
}

export default TeamContextProvider;
