import axios from "axios";

const baseUrl = 'http://localhost:3000'
/**
 * @name getEmployee
 * @description service to get Employee
 * @returns json data
 */
const getCurrentUSer = (emailId: string | undefined) => axios.get(`${baseUrl}/users?emailId=${emailId}`);

const coreServices = {
    getCurrentUSer,
}

export default coreServices;