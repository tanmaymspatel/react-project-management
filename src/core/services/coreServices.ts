import axios from "axios";

const baseUrl = 'http://localhost:3000'
/**
 * @param emailId logged in user email id 
 * @returns details of the logged in user
 */
const getCurrentUSer = (emailId: string | undefined) => axios.get(`${baseUrl}/users?emailId=${emailId}`);
/**
 * @param user the user object which is to bed added to the database
 * @description to add a user object to the database
 */
const addNewUser = (user: any) => axios.post(`${baseUrl}/users`, user);
/**
 * @description all services in the form of object and can be destructured where it is to be used
 */
const coreServices = {
    getCurrentUSer,
    addNewUser
}

export default coreServices;