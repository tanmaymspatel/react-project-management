import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react'

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
    const { user } = useAuth0();

    const { getCurrentUSer } = coreServices;

    /**
     * @description State for changing the title of the header
     */
    const [headerTitle, setHeaderTitle] = useState<string>('Projects');
    const [currentUser, setCurrentUSer] = useState({});

    const getCurrentUserData = async () => {
        let currentUser = await getCurrentUSer(user?.email);
        const picture = user?.picture;
        currentUser = { ...currentUser.data[0], picture };
        setCurrentUSer(currentUser)
    }
    getCurrentUserData();

    /**
     * @description Values which are passed as props to context provider 
     */
    const userContext = {
        headerTitle,
        setHeaderTitle,
        currentUser,
    };

    return (
        <UserContext.Provider value={userContext}>
            {children}
        </UserContext.Provider>
    )
};

export default UserProvider;
