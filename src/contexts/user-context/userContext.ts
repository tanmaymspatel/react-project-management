import { createContext } from "react";
import { IUserDetails } from "../../components/projects/models/user.model";
import { IUserContext } from "./interface";



const initialValue: IUserContext = {
    headerTitle: '',
    setHeaderTitle: (title: string) => { },
    currentUser: {} as any,
}


/**
 * @name UserContext
 * @description context for manipulating the value of header title when required
 * @description context for passing the valuse of logged in user inform of an object 
 */
const UserContext = createContext(initialValue);

export default UserContext