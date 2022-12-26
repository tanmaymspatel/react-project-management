import { createContext } from "react";
import { TaskDetails } from "../../components/projects/models/formValues";
import { ITaskProvider } from "./interface";

const initVal: any = {
    taskTobeEdited: {} as TaskDetails,
    setTaskTobeEdited: (task: TaskDetails) => { },
    isEdit: false,
    setIsEdit: (value: boolean) => { },
    todoList: [] as TaskDetails[],
    activeTaskList: [] as TaskDetails[],
    completedTaskList: [] as TaskDetails[],
    closeOverlay: () => { },
    openOverlay: (type: string) => { },
    modifyProjectDetails: (value: TaskDetails) => { },
    isOpen: false,
    isSubTaskOpen: false,
    setProjectId: (value: any) => { },
    setTodoList: (value: any) => { },
    setActiveTaskList: (value: any) => { },
    setCompletedTaskList: (value: any) => { },
}

/**
 * @name TaskContext
 * @description context for manipulating the value of header title when required
 * @description context for passing the valuse of logged in user inform of an object 
 */
const TaskContext = createContext(initVal)


export default TaskContext