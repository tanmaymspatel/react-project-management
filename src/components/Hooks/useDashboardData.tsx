import { useCallback, useEffect, useState } from "react";

import projectServices from "../../services/projectServices";
import useTaskData from "./useTaskData";
import { ITaskDetails } from "../projects/models/formValues";
import { ITeamDepartment } from "../Teams/model/teamDetails";
/**
 * @param id clicked project id
 * @returns A custom hook returning dashboard related data 
 */
function useDashboardData(id: string) {
    /**
     * @name useTaskData
     * @description Custom hook for getting needed tasklist data
     */
    const [todoList, activeTaskList, completedTaskList] = useTaskData(id as string);

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
            setTasklist((activeTaskList as ITaskDetails[]).concat((todoList as ITaskDetails[]), (completedTaskList as ITaskDetails[])));
        })
        const data = await getTeamsById(teamId);
        const teamData = await data.data;
        setTeamMembers(teamData.members);
    }, [getProjectDetailsById, id, teamId, getTeamsById, todoList, activeTaskList, completedTaskList]);

    useEffect(() => {
        getTaskList();
    }, [getTaskList]);

    return [taskList, teamMembers, projectDuration, projectCost] as const;
};

export default useDashboardData;
