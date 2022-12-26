import { TaskDetails } from "../../components/projects/models/formValues";
import { IUserDetails } from "../../components/projects/models/user.model";

export interface ITaskProvider {
    taskTobeEdited: TaskDetails,
    setTaskTobeEdited: React.Dispatch<React.SetStateAction<TaskDetails>>,
    isEdit: boolean,
    setIsEdit: React.Dispatch<React.SetStateAction<boolean>>,
    todoList: TaskDetails[],
    activeTaskList: TaskDetails[],
    completedTaskList: TaskDetails[],
    closeOverlay: () => {},
    openOverlay: (type: string) => {},
    modifyProjectDetails: (value: TaskDetails) => {},
    isOpen: boolean,
    setProjectId: (id: string) => {},
    isSubTaskOpen: boolean,
    setId: React.Dispatch<React.SetStateAction<boolean>>,
    setTodoList: React.Dispatch<React.SetStateAction<TaskDetails[]>>,
    setActiveTaskList: React.Dispatch<React.SetStateAction<TaskDetails[]>>,
    setCompletedTaskList: React.Dispatch<React.SetStateAction<TaskDetails[]>>
}

export interface IUserContext {
    headerTitle: string,
    setHeaderTitle: (title: string) => void,
    currentUser: {},
}