import { useCallback, useEffect, useState } from "react";
import projectServices from "../../services/projectServices";

import TaskContext from "./taskContext"

type TaskContextProviderProps = {
    children: React.ReactNode
}

function TaskProvider({ children }: TaskContextProviderProps) {

    const [taskTobeEdited, setTaskTobeEdited] = useState({})
    const [isEdit, setIsEdit] = useState(false);
    const [id, setId] = useState('')
    const { getProjectDetailsById, updateProject } = projectServices;
    const [projectDetails, setProjectDetails] = useState<any>({});
    const [todoList, setTodoList] = useState<any>([]);
    const [activeTaskList, setActiveTaskList] = useState<any>([]);
    const [completedTaskList, setCompletedTaskList] = useState<any>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isSubTaskOpen, setIsSubTaskIsOpen] = useState(false);

    const closeOverlay = () => {
        setIsEdit(false);
        setIsOpen(false);
        setIsSubTaskIsOpen(false)
    };

    const openOverlay = (overlayType: string) => {
        if (overlayType === "NEW_TASK_OVERLAY") setIsOpen(true);
        else if (overlayType === "SUB_TASK_OVERLAY") setIsSubTaskIsOpen(true);
    };

    const getData = useCallback(async () => {
        try {
            getProjectDetailsById(id as string)
                .then((res: any) => {
                    setProjectDetails(res.data);
                    setTodoList(res.data.todoList);
                    setActiveTaskList(res.data.activeTaskList);
                    setCompletedTaskList(res.data.completedTaskList);
                });
        } catch (err) {
            console.log(err);

        }
    }, [id, getProjectDetailsById]);

    useEffect(() => {
        getData();
    }, [getData]);

    const getMaxId = (taskList: any) => {
        return Math.max(...taskList.map((task: any) => task.id));
    }

    const editedTaskList = (TaskList: any[], updatedValues: any) => {
        const index = TaskList.findIndex(item => item.id === updatedValues.id);
        TaskList.splice(index, 1, updatedValues);
        return TaskList;
    }

    const modifyProjectDetails = async (values: any) => {

        switch (values.status) {
            case "todo":
                if (values.id) {
                    const newList = editedTaskList(todoList, values);
                    setTodoList(newList);
                }
                else {
                    setTodoList((prevList: any) => {
                        const maxid = getMaxId(prevList);
                        return prevList.splice(prevList.length, 0, { id: maxid + 1, ...values });
                    });
                    setProjectDetails((prevDetails: any) => (prevDetails.todoList = todoList));
                }
                break;
            case "active":
                if (values.id) {
                    const newList = editedTaskList(activeTaskList, values);
                    setActiveTaskList(newList);
                }
                else {
                    setActiveTaskList((prevList: any) => {
                        const maxid = getMaxId(prevList);
                        return prevList.splice(prevList.length, 0, { id: maxid + 1, ...values });
                    });
                    setProjectDetails((prevDetails: any) => (prevDetails.activeTaskList = activeTaskList));
                }
                break;
            case "completed":
                if (values.id) {
                    const newList = editedTaskList(completedTaskList, values);
                    setCompletedTaskList(newList);
                }
                else {
                    setCompletedTaskList((prevList: any) => {
                        const maxid = getMaxId(prevList);
                        return prevList.splice(prevList.length, 0, { id: maxid + 1, ...values });
                    });
                    setProjectDetails((prevDetails: any) => (prevDetails.completedTaskList = completedTaskList));
                }
                break;
        }
        await updateProject(id, projectDetails);
        await getData();
    };

    const taskContext = {
        setTaskTobeEdited,
        setIsEdit,
        closeOverlay,
        openOverlay,
        modifyProjectDetails,
        setId,
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
