import { useContext, useEffect } from "react";

import utlityServices from "../../shared/services/utilityServices";
import UserContext from "../../contexts/user-context/userContext";
import { useParams } from "react-router-dom";
import ProgressBar from "../../shared/components/UI/ProgressBar";
import ProjectStatus from "./ProjectStatus";
import TaskStates from "./TaskStates";
import TeamStates from "./TeamStates";
import TaskList from "./TaskList";
import ProjectDetails from "./ProjectDetails";
import TaskContext from "../../contexts/taskContext/taskContext";
import useDashboardData from "../Hooks/useDashboardData";

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
     * @description Consumption of task context
     */
    const { setProjectId } = useContext(TaskContext);
    /**
     * @description Set the clicked project id for the task context
     */
    useEffect(() => {
        setProjectId(id as string);
    }, [setProjectId, id]);
    /**
     * @description Custom hook for getting data related to the dashboard
     */
    const [taskList, teamMembers, projectDuration, projectCost] = useDashboardData(id as string);
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
    });

    return (
        <div className="dashboard-container h-100 px-2 px-md-4 p-xl-4">
            <ProgressBar progress='67' bgColor="secondary" />
            <div className="my-4">
                <ProjectStatus />
            </div>
            <div className="row my-4 gy-3 gy-lg-0">
                <div className="col-lg-3 my-3 my-lg-0">
                    <TaskStates taskList={taskList} />
                </div>
                <div className="col-lg-9">
                    <TeamStates teamMembers={teamMembers} />
                </div>
            </div>
            <div className="row mt-4 gy-3 gy-lg-0">
                <div className="col-lg-8 my-3 my-lg-0">
                    <TaskList taskList={taskList} />
                </div>
                <div className="col-lg-4">
                    <ProjectDetails projectDuration={projectDuration} projectCost={projectCost} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;


