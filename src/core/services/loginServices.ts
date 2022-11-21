import axios from "axios";

const baseUrl = 'http://localhost:3000'

/**
 * @name getEmployee
 * @description service to get Employee
 * @returns json data
 */
const getEmployees = () => axios.get(`${baseUrl}/users`);

export default getEmployees;