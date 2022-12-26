import { TaskDetails } from "../../components/projects/models/formValues";

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