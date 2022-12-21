import axios from "axios";
import { ProjectFormDetails } from "../components/projects/models/formValues";
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
const editProject = (id: string, project: any) => axios.get(`${baseUrl}/projects/${id}`, project);
/**
 * @param id id of the project which is to be deleted 
 */
const deleteProjectDetailsById = (id: string | undefined) => axios.delete(`${baseUrl}/projects/${id}`);
/**
 * @param id id of peoject which is to be edited
 * @param project edited project details
 */
const updateProject = (id: string | undefined, project: ProjectFormDetails) => axios.put(`${baseUrl}/projects/${id}`, project);
/**
 * @param project new project which is to be added to be database  
 */
const addNewProject = (project: ProjectFormDetails) => axios.post(`${baseUrl}/projects`, project);
/**
 * @param id id of user which is to be edited 
 * @param user edited user details
 */
const editedUser = (id: any, user: ProjectFormDetails) => axios.put(`${baseUrl}/users/${id}`, user);
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

const updateTeamDetails = (teamId: string, updatedTeam: any) => axios.put(`${baseUrl}/teams/${teamId}`, updatedTeam)

const projectServices = {
    getProjectDetailsById,
    addNewProject,
    editedUser,
    getAllProjects,
    deleteProjectDetailsById,
    updateProject,
    getStatus,
    getPriority,
    editProject,
    getTeamsById,
    updateTeamDetails
};
export default projectServices;