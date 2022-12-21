import { createContext } from "react";
import { TaskDetails } from "../../components/projects/models/formValues";

/**
 * @name TaskContext
 * @description context for manipulating the value of header title when required
 * @description context for passing the valuse of logged in user inform of an object 
 */
const TaskContext = createContext({
    taskTobeEdited: {} as any,
    setTaskTobeEdited: (task: any) => { },
    isEdit: false,
    setIsEdit: (value: any) => { },
    todoList: [],
    activeTaskList: [],
    completedTaskList: [],
    closeOverlay: () => { },
    openOverlay: (type: string) => { },
    modifyProjectDetails: (value: TaskDetails) => { },
    isOpen: false,
    isSubTaskOpen: false,
    setId: (value: any) => { },
    setTodoList: (value: any) => { },
    setActiveTaskList: (value: any) => { },
    setCompletedTaskList: (value: any) => { },
});

export default TaskContext