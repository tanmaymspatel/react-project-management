import { createContext } from "react";

const UserContext = createContext({
    headerTitle: '',
    setHeaderTitle: (any: any) => { },
    user: {} as any
});

export default UserContext