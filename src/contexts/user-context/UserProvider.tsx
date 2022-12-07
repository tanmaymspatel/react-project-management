import { useCallback, useEffect, useState } from 'react'

import coreServices from '../../core/services/coreServices';
import UserContext from './userContext'

/**
 * @name UserProvider
 * @returns A wrapper of usercontext data around the componenet in which we need to pass the data or manipulate the data
 */
function UserProvider({ children }: any) {
    /**
     * @description Object of details of loggeg in user
     */

    const email: any = localStorage.getItem('email');

    const { getCurrentUSer } = coreServices;

    /**
     * @description State for changing the title of the header
     */
    const [headerTitle, setHeaderTitle] = useState<string>('Projects');
    /**
     * @description Set the value of logged in user
     */
    const [currentUser, setCurrentUSer] = useState({});
    /**
     * @name getCurrentUserData 
     * @description to get the modified data of the logged in user
     */
    const getCurrentUserData = useCallback(async () => {
        const loggedinUser = await getCurrentUSer(email);
        const data = loggedinUser.data[0];
        setCurrentUSer(data);
    }, [getCurrentUSer, email])

    /**
     * @description Values which are passed as props to context provider 
     */
    const userContext = {
        headerTitle,
        setHeaderTitle,
        currentUser,
    };

    /**
     * @description render component when the logged in user is changed
     */
    useEffect(() => {
        getCurrentUserData();

    }, [getCurrentUserData])


    return (
        <UserContext.Provider value={userContext}>
            {children}
        </UserContext.Provider>
    )
};

export default UserProvider;
