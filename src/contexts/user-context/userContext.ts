import { createContext } from "react";
import { IUserContext } from "../InterFace/contextInterface";

const initialValue: IUserContext = {
    headerTitle: '',
    setHeaderTitle: () => { },
    currentUser: {},
}
/**
 * @name UserContext
 * @description context for manipulating the value of header title when required
 * @description context for passing the valuse of logged in user inform of an object 
 */
const UserContext = createContext(initialValue);

export default UserContext