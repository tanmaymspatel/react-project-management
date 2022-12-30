import { useState } from "react";

import useTaskData from "../../components/Hooks/useTaskData";
import { ITaskDetails } from "../../components/projects/models/formValues";
import TaskContext from "../taskContext/taskContext"

type TaskContextProviderProps = {
    children: React.ReactNode
}
/**
 * @returns Task Provider component to provide context data to the consumer 
 */
function TaskProvider({ children }: TaskContextProviderProps) {

    const [taskTobeEdited, setTaskTobeEdited] = useState<ITaskDetails>({} as ITaskDetails)
    const [isEdit, setIsEdit] = useState(false);
    const [id, setId] = useState('')
    const [isOpen, setIsOpen] = useState(false);
    const [isSubTaskOpen, setIsSubTaskIsOpen] = useState(false);
    /**
     * @description from custom hook
     */
    const [modifyProjectDetails] = useTaskData(id);
    /**
     * @name closeOverlay
     * @description To close the task overlay
     */
    const closeOverlay = () => {
        setIsEdit(false);
        setIsOpen(false);
        setIsSubTaskIsOpen(false);
    };
    /**
     * @name setProjectId
     * @description set the clicked project id
     * @param pid id of the clicked project
     */
    const setProjectId = (pid: string) => {
        setId(pid);
    }
    /**
     * @name openOverlay
     * @description To open task for overlay
     * @param overlayType To differentiate between what to open in overlay, taskform or subtask form 
     */
    const openOverlay = (overlayType: string) => {
        if (overlayType === "TASK_OVERLAY") setIsOpen(true);
        else if (overlayType === "SUB_TASK_OVERLAY") setIsSubTaskIsOpen(true);
    };

    const taskContext = {
        setTaskTobeEdited,
        setIsEdit,
        closeOverlay,
        openOverlay,
        setProjectId,
        modifyProjectDetails,
        taskTobeEdited,
        isEdit,
        isOpen,
        isSubTaskOpen
    };

    return (
        <TaskContext.Provider value={taskContext}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskProvider;
