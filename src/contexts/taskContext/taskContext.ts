import { createContext } from "react";
import { ITaskDetails } from "../../components/projects/models/formValues";
import { ITaskProvider } from "../InterFace/contextInterface";

const initVal: any = {
    taskTobeEdited: {} as ITaskDetails,
    setTaskTobeEdited: () => { },
    isEdit: false,
    setIsEdit: () => { },
    closeOverlay: () => { },
    openOverlay: (type: string) => { },
    modifyProjectDetails: (value: ITaskDetails) => { },
    isOpen: false,
    isSubTaskOpen: false,
    setProjectId: () => { },
}

/**
 * @name TaskContext
 * @description context for manipulating the value of header title when required
 * @description context for passing the valuse of logged in user inform of an object 
 */
const TaskContext = createContext(initVal)


export default TaskContext