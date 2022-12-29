import { ITaskDetails } from "../../components/projects/models/formValues";

export interface ITaskProvider {
    taskTobeEdited: {},
    setTaskTobeEdited: React.Dispatch<React.SetStateAction<ITaskDetails | null>>,
    isEdit: boolean,
    setIsEdit: (value: boolean) => void,
    todoList: ITaskDetails[],
    activeTaskList: ITaskDetails[],
    completedTaskList: ITaskDetails[],
    closeOverlay: () => void,
    openOverlay: (type: string) => void,
    modifyProjectDetails: (value: ITaskDetails) => void,
    isOpen: boolean,
    setProjectId: (id: string) => void,
    isSubTaskOpen: boolean,
    setTodoList: (value: ITaskDetails[]) => void,
    setActiveTaskList: (value: ITaskDetails[]) => void,
    setCompletedTaskList: (value: ITaskDetails[]) => void
}

export interface IUserContext {
    headerTitle: string,
    setHeaderTitle: (title: string) => void,
    currentUser: {},
}

export interface ISearchProvider {
    searchText: string,
    setSearchString: (text: string) => void,
    searchByDept: string,
    setDeptValue: (text: string) => void,
}
