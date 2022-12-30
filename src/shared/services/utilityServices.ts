import { ITaskDetails } from "../../components/projects/models/formValues";
import { IMemberDetails, ITeamDepartment } from "../../components/Teams/model/teamDetails";

/**
 * @name removeProjectsActiveClass
 * @description use to remove 'active' class from the projects link when the other than projects componenet is loaded
 */
const removeProjectsActiveClass = (id: string | undefined) => {
    document.querySelector(".projects-link")?.classList?.remove('active')
    if (!id)
        document.querySelector(".projects-link")?.classList?.add('active')
}
/**
 * @name getMaxId
 * @param List task list from which item of maximum id is to be found
 * @returns a maximum number
 */
const getMaxId = (List: ITaskDetails[]) => {
    return Math.max(...List.map((task: any) => task.id));
}
/**
 * @name editedTaskList
 * @param TaskList list of tasks
 * @param updatedValues value after submitting, and which is to be updated
 * @returns new task list with updated value
 */
const editedTaskList = (TaskList: ITaskDetails[], updatedValues: ITaskDetails) => {
    const index = TaskList.findIndex(item => item.id === updatedValues.id);
    TaskList.splice(index, 1, updatedValues);
    return TaskList;
}
/**
 * @name editTeamDetails
 * @param deptList list of department
 * @param values team details filled by the user
 * @param teamMembers object of dept
 * @returns 
 */
const editTeamDetails = (deptList: IMemberDetails[], values: IMemberDetails, teamMembers: ITeamDepartment[]) => {
    let list = deptList?.map((item: any) => item?.teamMembers);
    list = list?.flat();
    list?.splice(list?.length, 0, { id: list.length + 1, ...values })
    let newDepObj: any;
    newDepObj = deptList[0]
    newDepObj = { ...newDepObj, teamMembers: list };
    const index = teamMembers.findIndex(item => item.department === newDepObj.department)
    teamMembers.splice(index, 1, newDepObj);
    return teamMembers;
}
/**
 * @name utlityServices
 * @description helper methods for easing the coed development
 */
const utlityServices = {
    removeProjectsActiveClass,
    getMaxId,
    editedTaskList,
    editTeamDetails
};

export default utlityServices;