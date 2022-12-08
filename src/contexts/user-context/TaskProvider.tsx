import { useState } from "react";

import TaskContext from "./taskContext"

function TaskProvider({ children }: any) {

    const [taskTobeEdited, setTaskTobeEdited] = useState({})
    const [isEdit, setIsEdit] = useState(false)

    const taskContext = {
        taskTobeEdited,
        setTaskTobeEdited,
        isEdit,
        setIsEdit
    };

    return (
        <TaskContext.Provider value={taskContext}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskProvider;
