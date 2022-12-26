import { useCallback, useEffect, useState } from "react";

import projectServices from "../../services/projectServices";
import utlityServices from "../../shared/services/utilityServices";
import { TaskDetails } from "../projects/models/formValues";

function useTaskData(id: string) {

    const [projectDetails, setProjectDetails] = useState<any>({});
    const [todoList, setTodoList] = useState<TaskDetails[]>([] as TaskDetails[]);
    const [activeTaskList, setActiveTaskList] = useState<TaskDetails[]>([] as TaskDetails[]);
    const [completedTaskList, setCompletedTaskList] = useState<TaskDetails[]>([] as TaskDetails[]);

    const { getMaxId, editedTaskList } = utlityServices;
    const { getProjectDetailsById, updateProject } = projectServices;

    /**
     * @name getData
     * @description Use to set the value of todo, active and completed tasks from the database 
     */
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

    /**
     * @name modifyProjectDetails
     * @description Use to add new task value and update existing value after clicking the submit button according to the status of the task, and after that updates the project details 
     * @param values Values of for submission
     */
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


    return [todoList, activeTaskList, completedTaskList, setActiveTaskList, setCompletedTaskList, setTodoList, modifyProjectDetails];
}

export default useTaskData;
