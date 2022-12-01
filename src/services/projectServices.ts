import axios from "axios";
import { ProjectFormDetails } from "../components/projects/models/formValues";

const baseUrl = 'http://localhost:3000'

const getProjectDetailsById = (id: string) => axios.get(`${baseUrl}/projects/${id}`);

const deleteProjectDetailsById = (id: string | undefined) => axios.delete(`${baseUrl}/projects/${id}`);

const addNewProject = (project: ProjectFormDetails) => axios.post(`${baseUrl}/projects`, project);

const editedProject = (id: string, user: any) => axios.put(`${baseUrl}/users/${id}`, user);

const getAllProjects = () => axios.get(`${baseUrl}/projects`)

const projectServices = {
    getProjectDetailsById,
    addNewProject,
    editedProject,
    getAllProjects,
    deleteProjectDetailsById
};
export default projectServices;