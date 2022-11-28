import axios from "axios";

const baseUrl = 'http://localhost:3000'

const getProjectDetailsById = (id: string) => axios.get(`${baseUrl}/projects/${id}`);

const projectServices = {
    getProjectDetailsById
};
export default projectServices;