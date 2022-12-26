import React, { SetStateAction, useCallback, useContext, useEffect, useState } from "react";

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
import { TaskDetails } from "../projects/models/formValues";
import { type } from "@testing-library/user-event/dist/type";
import TaskContext from "../../contexts/user-context/taskContext";

/**
 * @name Dasboard
 * @returns Dashboard of a selected id of a project
 */
function Dashboard() {
    /**
     * @description project id which is clicked
     */
    const { id } = useParams();

    const { setProjectId } = useContext(TaskContext);

    useEffect(() => {
        setProjectId(id)
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

    const [taskList, setTasklist] = useState<TaskDetails[]>([]);
    const [todoList, setTodolist] = useState<TaskDetails[]>([]);
    const [projectDetails, setProjectDetails] = useState<any>({});
    const [activeTaskList, setActiveTasklist] = useState<TaskDetails[]>([]);
    const [completedTaskList, setCompletedTasklist] = useState<TaskDetails[]>([]);
    const [teamMembers, setTeamMembers] = useState([]);
    const [projectDuration, setProjectDuration] = useState('');
    const [projectCost, setProjectCost] = useState('');
    const [teamId, setTeamId] = useState('');

    const { getProjectDetailsById, getTeamsById } = projectServices;
    /**
     * @description Use to get team data associated with the id, project cost;duration
     */
    const getTaskList = useCallback(async () => {
        getProjectDetailsById(id as string).then(res => {
            setProjectDetails(res.data);
            setTeamId(res.data.teamId);
            setProjectCost(res.data.cost);
            setProjectDuration(res.data.duration);
            setActiveTasklist(res.data.activeTaskList);
            setTodolist(res.data.todoList);
            setCompletedTasklist(res.data.completedTaskList);
            setTasklist(activeTaskList.concat((todoList), completedTaskList));
        })
        const data = await getTeamsById(teamId);
        const teamData = await data.data;
        setTeamMembers(teamData.members);
    }, [getProjectDetailsById, id, teamId, getTeamsById])

    useEffect(() => {
        getTaskList();
    }, [getTaskList]);

    const setList = useCallback(() => {
        setTodolist(projectDetails.todoList);
        setActiveTasklist(projectDetails.activeTaskList);
        setCompletedTasklist(projectDetails.completedTaskList);
    }, [projectDetails]);

    useEffect(() => {
        setList()
    }, [setList]);

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


