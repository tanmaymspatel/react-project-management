import { NavLink, useParams } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

import Button from '../../shared/components/UI/Button';


export default function Sidebar({ currentId }: any) {

    const { logout, user } = useAuth0();
    const name = user?.nickname;


    return (
        <>
            <div className='side-header d-flex align-items-center justify-content-center'>
                <h4>React Basics</h4>
            </div>
            <div className='d-flex flex-column flex-grow-1 overflow-hidden'>
                <nav className='flex-grow-1 p-3 overflow-y-auto'>
                    <ul className='nav d-flex flex-column'>
                        {!currentId && <li className='nav-item p-2 '>
                            <NavLink className='nav-link border-radius' to={'/' + name + '/projects'}>Projects</NavLink>
                        </li>}
                        <li className='nav-item p-2'>
                            <NavLink className='nav-link border-radius' to={'/' + name + '/projects/' + 1 + '/dashboard'}>Dashboard</NavLink>
                        </li>
                        <li className='nav-item p-2'>
                            <NavLink className='nav-link border-radius' to={'/' + name + '/projects/' + 1 + '/tasks'}>Tasks</NavLink>
                        </li>
                        <li className='nav-item p-2'>
                            <NavLink className='nav-link border-radius' to={'/' + name + '/projects/' + 1 + '/teams'}>Teams</NavLink>
                        </li>
                    </ul>
                </nav>
                <nav className='p-3'>
                    <ul>
                        {/* <NavLink className='nav-link border-radius' to='' onClick={}>Employee List</NavLink> */}
                        <Button type='button' className="my-2 btn btn-light text-secondary" handleClick={() => logout({ returnTo: window.location.origin })}>Logout</Button>

                    </ul>
                </nav>
            </div>
        </>
    )

}
