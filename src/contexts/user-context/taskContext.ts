import { createContext } from "react";
import { boolean } from "yup";

/**
 * @name TaskContext
 * @description context for manipulating the value of header title when required
 * @description context for passing the valuse of logged in user inform of an object 
 */
const TaskContext = createContext({
    taskTobeEdited: {} as any,
    setTaskTobeEdited: (task: any) => { },
    isEdit: false,
    setIsEdit: (value: any) => { }
});

export default TaskContext