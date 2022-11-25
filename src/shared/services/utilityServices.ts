/**
 * @name removeProjectsActiveClass
 * @description use to remove 'active' class from the projects link when the other than projects componenet is loaded
 */
const removeProjectsActiveClass = () => {
    document.querySelector(".projects-link")?.classList?.remove('active')
}

/**
 * @name utlityServices
 * @description helper methods for easing the coed development
 */
const utlityServices = {
    removeProjectsActiveClass
};

export default utlityServices;