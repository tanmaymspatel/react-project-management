import { createContext } from "react";

/**
 * @name UserContext
 * @description context for manipulating the value of header title when required
 * @description context for passing the valuse of logged in user inform of an object 
 */
const UserContext = createContext({
    headerTitle: '',
    setHeaderTitle: (item: string) => { },
    user: {} as any
});

export default UserContext