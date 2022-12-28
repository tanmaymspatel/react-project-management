import axios from "axios";
import { IProjectFormDetails } from "../components/projects/models/formValues";
import { ITeamDetails } from "../components/Teams/model/teamDetails";
/**
 * @description Api url
 */
const baseUrl = 'http://localhost:3000'
/**
 * @returns all the details of the projects
 */
const getAllProjects = () => axios.get(`${baseUrl}/projects`);
/**
 * @param id project id of which data is to be fetched
 * @returns individual project details of perticular id
 */
const getProjectDetailsById = (id: string) => axios.get(`${baseUrl}/projects/${id}`);
/**
 * @description use to edit the details of the existing project
 * @param id project id of which data is to be edited
 */

const deleteProjectDetailsById = (id: string | undefined) => axios.delete(`${baseUrl}/projects/${id}`);
/**
 * @param id id of peoject which is to be edited
 * @param project edited project details
 */
const updateProject = (id: string | undefined, project: IProjectFormDetails) => axios.put(`${baseUrl}/projects/${id}`, project);
/**
 * @param project new project which is to be added to be database  
 */
const addNewProject = (project: IProjectFormDetails) => axios.post(`${baseUrl}/projects`, project);
/**
 * @param id id of user which is to be edited 
 * @param user edited user details
 */
const editedUser = (id: any, user: IProjectFormDetails) => axios.put(`${baseUrl}/users/${id}`, user);
/**
 * @description all services in the form of object and can be destructured where it is to be used
 */
/**
 * @returns array of all status objects
 */
const getStatus = () => axios.get(`${baseUrl}/status`);
/**
* @returns array of all the priority objects
*/
const getPriority = () => axios.get(`${baseUrl}/priority`);
/**
* @returns array of all the priority objects
*/
const getTeamsById = (id: string) => axios.get(`${baseUrl}/teams/${id}`);
/**
 * @description updates the whole team object having respective id
 * @param teamId id of the team associated with the clicked project
 * @param updatedTeam new object containing all the memberlist with respective modified list
 */
const updateTeamDetails = (teamId: string, updatedTeam: ITeamDetails[]) => axios.put(`${baseUrl}/teams/${teamId}`, updatedTeam)
/**
 * @description 
 */
const projectServices = {
    getProjectDetailsById,
    addNewProject,
    editedUser,
    getAllProjects,
    deleteProjectDetailsById,
    updateProject,
    getStatus,
    getPriority,
    getTeamsById,
    updateTeamDetails
};
export default projectServices;