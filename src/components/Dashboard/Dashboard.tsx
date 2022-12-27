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
import useTaskData from "../Hooks/useTaskData";
import ProjectDetails from "./ProjectDetails";
import { ITaskDetails } from "../projects/models/formValues";
import TaskContext from "../../contexts/taskContext/taskContext";
import { ITeamDepartment } from "../Teams/model/teamDetails";

/**
 * @name Dasboard
 * @returns Dashboard of a selected id of a project
 */
function Dashboard() {
    /**
     * @description project id which is clicked
     */
    const { id } = useParams();


    const [todoList, activeTaskList, completedTaskList] = useTaskData(id as string)
    const { setProjectId } = useContext(TaskContext);

    useEffect(() => {
        setProjectId(id as string)
    }, [])
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

    const [taskList, setTasklist] = useState<ITaskDetails[]>([]);
    const [teamMembers, setTeamMembers] = useState<ITeamDepartment[]>([]);
    const [projectDuration, setProjectDuration] = useState('');
    const [projectCost, setProjectCost] = useState('');
    const [teamId, setTeamId] = useState('');

    const { getProjectDetailsById, getTeamsById } = projectServices;
    /**
     * @description Use to get team data associated with the id, project cost;duration
     */
    const getTaskList = useCallback(async () => {
        getProjectDetailsById(id as string).then(res => {
            setTeamId(res.data.teamId);
            setProjectCost(res.data.cost);
            setProjectDuration(res.data.duration);
            setTasklist((todoList as ITaskDetails[]).concat((activeTaskList as ITaskDetails[]), (completedTaskList as ITaskDetails[])))
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
                    <ProjectDetails projectDuration={projectDuration} projectCost={projectCost} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;


