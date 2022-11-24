import { NavLink, useParams } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import Button from '../../shared/components/UI/Button';


export default function Sidebar() {

    const params = useParams()

    const { logout, user } = useAuth0();
    const name = user?.nickname;

    const logoutHandler = () => {
        logout({ returnTo: window.location.origin })
    }


    return (
        <>
            <input type='checkbox' id='toggleSidebar' className='d-none' />
            <input type='checkbox' id='mobileToggle' className='d-none' />
            <aside id="sidebar" className="h-100 d-flex flex-column bg-secondary text-light overflow-hidden transition" >
                <div className='side-header d-flex align-items-center justify-content-center'>
                    <h4 className='d-flex align-items-center'>
                        <span className='icon-logo'></span>
                        <span className='ps-2 logo-text text-nowrap'>Cube Solution</span>
                    </h4>
                </div>
                <div className='d-flex flex-column flex-grow-1 overflow-hidden'>
                    <nav className='nav-options flex-grow-1 overflow-y-auto transition'>
                        <ul className='nav d-flex flex-column'>
                            <li className='nav-item p-2 '>
                                <NavLink className='nav-link d-flex align-items-center border-radius' to={'/' + name + '/projects'}>
                                    <span className='icon-dashboard'></span>
                                    <span className='nav-text text-nowrap ps-2'>Projects</span>
                                </NavLink>
                            </li>
                            {params.id && <><li className='nav-item p-2'>
                                <NavLink className='nav-link d-flex align-items-center border-radius' to={'/' + name + '/projects/' + 1 + '/dashboard'}>
                                    <span className='icon-dashboard'></span>
                                    <span className='nav-text text-nowrap ps-2'>Dashboard</span>
                                </NavLink>
                            </li>
                                <li className='nav-item p-2'>
                                    <NavLink className='nav-link d-flex align-items-center border-radius' to={'/' + name + '/projects/' + 1 + '/tasks'}>
                                        <span className='icon-task'></span>
                                        <span className='nav-text text-nowrap ps-2'>Tasks</span>
                                    </NavLink>
                                </li>
                                <li className='nav-item p-2'>
                                    <NavLink className='nav-link d-flex align-items-center border-radius' to={'/' + name + '/projects/' + 1 + '/teams'}>
                                        <span className='icon-users'></span>
                                        <span className='nav-text text-nowrap ps-2'>Teams</span>
                                    </NavLink>
                                </li>
                            </>}
                        </ul>
                    </nav>
                    <nav className='nav-action'>
                        <ul className='nav d-flex flex-column'>
                            <li className='nav-item p-2'>
                                {/* <NavLink className='nav-link border-radius' to='#' onClick={logoutHandler}>Logout</NavLink> */}
                                <Button type='button' className='btn btn-outline-info w-100 fw-bold' handleClick={logoutHandler}>
                                    <span className='icon-signout'></span>
                                    <span className='nav-text text-nowrap ps-2'>Logout</span>
                                </Button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
            <label htmlFor='toggleSidebar' className='toggle position-absolute top-50 start-100 text-dark fs-3 transition cursor-pointer d-none d-md-block'>
                <span className='icon-down'></span>
            </label>
            <label htmlFor='mobileToggle' className='mobile-toggle position-absolute fs-1 transition d-md-none'>
                <span className='icon-new-task'></span>
            </label>
        </>
    )

}
