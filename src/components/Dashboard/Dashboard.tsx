import { useCallback, useContext, useEffect, useState } from "react";

import utlityServices from "../../shared/services/utilityServices";
import UserContext from "../../contexts/user-context/userContext";
import { useParams } from "react-router-dom";
import ProgressBar from "../../shared/components/UI/ProgressBar";
import ProjectStatus from "./ProjectStatus";
import TaskStates from "./TaskStates";
import projectServices from "../../services/projectServices";
import TeamStates from "./TeamStates";
import TaskList from "./TaskList";

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
    const [teamMembers, setTeamMembers] = useState([]);
    const [projectDuration, setProjectDuration] = useState('');
    const [projectCost, setProjectCost] = useState('');
    const [teamId, setTeamId] = useState('');
    const { getProjectDetailsById, getTeamsById } = projectServices;

    const getTaskList = useCallback(async () => {
        getProjectDetailsById(id as string).then(res => {
            console.log(res.data);

            const activeTaskList = res.data.activeTaskList;
            const todoTaskList = res.data.todoList;
            const completedTaskList = res.data.completedTaskList;
            setTeamId(res.data.teamId);
            setProjectCost(res.data.cost);
            setProjectDuration(res.data.duration);
            setTasklist(todoTaskList.concat(activeTaskList, completedTaskList));
        })
        const data = await getTeamsById(teamId);
        const teamData = await data.data;
        setTeamMembers(teamData.members);
    }, [getProjectDetailsById, id, teamId, getTeamsById])

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
                <div className="col-9">
                    <TeamStates teamMembers={teamMembers} />
                </div>
            </div>
            <div className="row my-4">
                <div className="col-8">
                    <TaskList taskList={taskList} />
                </div>
                <div className="col-4">
                    <div className="card p-3 ">
                        <div className=" py-3 px-2">
                            <div className="d-flex justify-content-around border-bottom border-info py-4">
                                <span className="dashboard-icon icon-time d-flex align-items-center text-secondary"></span>
                                <div className="py-1">
                                    <p className="m-0 py-2">Duration:</p>
                                    <p>{projectDuration}</p>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-around py-4 px-2">
                            <span className="dashboard-icon icon-rupee d-flex align-items-center text-success"></span>
                            <div className="py-1">
                                <p className="m-0 py-2">Cost:</p>
                                <p>{projectCost}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;


