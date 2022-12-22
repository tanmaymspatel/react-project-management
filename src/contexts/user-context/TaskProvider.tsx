import { useState } from "react";
import useTaskData from "../../components/Hooks/useTaskData";

import TaskContext from "./taskContext"

type TaskContextProviderProps = {
    children: React.ReactNode
}

function TaskProvider({ children }: TaskContextProviderProps) {

    const [taskTobeEdited, setTaskTobeEdited] = useState({})
    const [isEdit, setIsEdit] = useState(false);
    const [id, setId] = useState('')
    const [isOpen, setIsOpen] = useState(false);
    const [isSubTaskOpen, setIsSubTaskIsOpen] = useState(false);

    const [modifyProjectDetails, todoList, activeTaskList, completedTaskList, setActiveTaskList, setCompletedTaskList, setTodoList] = useTaskData(id);

    const closeOverlay = () => {
        setIsEdit(false);
        setIsOpen(false);
        setIsSubTaskIsOpen(false)
    };

    const openOverlay = (overlayType: string) => {
        if (overlayType === "NEW_TASK_OVERLAY") setIsOpen(true);
        else if (overlayType === "SUB_TASK_OVERLAY") setIsSubTaskIsOpen(true);
    };

    const taskContext = {
        setTaskTobeEdited,
        setIsEdit,
        closeOverlay,
        openOverlay,
        modifyProjectDetails,
        setId,
        setTodoList,
        setActiveTaskList,
        setCompletedTaskList,
        taskTobeEdited,
        isEdit,
        todoList,
        activeTaskList,
        completedTaskList,
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
