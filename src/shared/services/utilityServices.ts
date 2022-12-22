/**
 * @name removeProjectsActiveClass
 * @description use to remove 'active' class from the projects link when the other than projects componenet is loaded
 */
const removeProjectsActiveClass = (id: string | undefined) => {
    document.querySelector(".projects-link")?.classList?.remove('active')
    if (!id)
        document.querySelector(".projects-link")?.classList?.add('active')
}

const getMaxId = (List: any) => {
    return Math.max(...List.map((task: any) => task.id));
}

const editedTaskList = (TaskList: any[], updatedValues: any) => {
    const index = TaskList.findIndex(item => item.id === updatedValues.id);
    TaskList.splice(index, 1, updatedValues);
    return TaskList;
}
/**
 * @name utlityServices
 * @description helper methods for easing the coed development
 */
const utlityServices = {
    removeProjectsActiveClass,
    getMaxId,
    editedTaskList
};

export default utlityServices;