import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react'
import UserContext from './userContext'

export default function UserProvider({ children }: any) {

    const { user } = useAuth0();

    const [headerTitle, setHeaderTitle] = useState<string>('Projects');

    const userContext = {
        headerTitle,
        setHeaderTitle,
        user
    };

    return (
        <UserContext.Provider value={userContext}>
            {children}
        </UserContext.Provider>
    )
};
