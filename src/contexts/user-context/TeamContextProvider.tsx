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

    const getMaxId = (teamList: any) => {
        return Math.max(...teamList.map((task: any) => task.id));
    }

    const teamCtx = {
        setProjectId,
        closeOverlay,
        openOverlay,
        isNewMemberOpen,
        projectId,
        getMaxId
    };

    return (
        <TeamContext.Provider value={teamCtx}>
            {children}
        </TeamContext.Provider>
    )
}

export default TeamContextProvider;
