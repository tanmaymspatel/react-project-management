import { useCallback, useContext, useEffect, useState } from "react";

import utlityServices from "../../shared/services/utilityServices";
import UserContext from "../../contexts/user-context/userContext";
import { useParams } from "react-router-dom";
import ProgressBar from "../../shared/components/UI/ProgressBar";
import ProjectStatus from "./ProjectStatus";
import TaskStates from "./TaskStates";
import projectServices from "../../services/projectServices";

/**
 * @name Dasboard
 * @returns Dashboard of a selected id of a project
 */
function Dashboard() {
    /**
     * @description project id which is clicked
     */
    const { id } = useParams();
    /**
     * @description Set the title of header to "Dashboard" when click on the dashboard link
     */
    const { setHeaderTitle } = useContext(UserContext);
    /**
     * @description Remove active class from projects link when the dashboard link is selected
     */
    const { removeProjectsActiveClass } = utlityServices;

    /**
     * @description To set the header title and remove active class when the component is loaded
     */
    useEffect(() => {
        setHeaderTitle('Dashboard');
        removeProjectsActiveClass(id);
        return () => { };
    });

    const [taskList, setTasklist] = useState([]);
    const { getProjectDetailsById } = projectServices;

    const getTaskList = useCallback(async () => {
        getProjectDetailsById(id as string).then(res => {
            const activeTaskList = res.data.activeTaskList;
            const todoTaskList = res.data.todoList;
            const completedTaskList = res.data.completedTaskList;
            setTasklist(todoTaskList.concat(activeTaskList, completedTaskList));
        })
    }, [getProjectDetailsById, id])

    useEffect(() => {
        getTaskList();
    }, [getTaskList]);

    return (
        <div className="h-100 p-4">
            <ProgressBar progress='67' bgColor="secondary" />
            <div className="my-4">
                <ProjectStatus />
            </div>
            <div className="row my-4">
                <div className="col-3">
                    <TaskStates taskList={taskList} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;


