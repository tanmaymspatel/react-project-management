import React from "react";
import { ITaskDetails } from "../../components/projects/models/formValues";

export interface ITaskProvider {
    taskTobeEdited: {},
    setTaskTobeEdited: React.Dispatch<React.SetStateAction<ITaskDetails | null>>,
    isEdit: boolean,
    setIsEdit: React.Dispatch<React.SetStateAction<boolean>>,
    closeOverlay: () => void,
    openOverlay: (type: string) => void,
    modifyProjectDetails: (value: ITaskDetails) => void,
    isOpen: boolean,
    setProjectId: React.Dispatch<React.SetStateAction<string>>,
    isSubTaskOpen: boolean,
}

export interface IUserContext {
    headerTitle: string,
    setHeaderTitle: React.Dispatch<React.SetStateAction<string>>,
    currentUser: {},
}

export interface ISearchProvider {
    searchText: string,
    setSearchString: (text: string) => void,
    searchByDept: string,
    setDeptValue: (text: string) => void,
}

export interface ITeamProvider {
    setProjectId: React.Dispatch<React.SetStateAction<string>>,
    closeTeamOverlay: () => void,
    openOverlay: () => void,
    isNewMemberOpen: boolean,
    projectId: string,
}
