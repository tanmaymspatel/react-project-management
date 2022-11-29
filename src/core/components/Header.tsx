import { useContext } from "react"

import UserContext from "../../contexts/user-context/userContext";

/**
 * @name Header
 * @returns Header of the aplication
 */
function Header() {

    /**
     * @description headertitle - To show the respective page title in the header
     * @description user - details of the logged in user
     */
    const { headerTitle, currentUser } = useContext(UserContext);

    return (
        <div className="h-100 d-flex align-items-center justify-content-between ps-5 pe-2 px-md-4">
            {/* Page title in the header
             */}
            <h4 className="flex-grow-1">{headerTitle}</h4>
            <div className="d-flex align-items-center pe-1 px-md-5">
                {/* avatar of the logged in user */}
                <figure className="header-profile-img m-0 d-none d-md-block">
                    <img className="img-fluid rounded-circle" src={currentUser?.picture} alt="Profile" />
                </figure>
                {/* Name of the logged in user */}
                <h6 className="m-0 ps-2">Welcome, <span className="fw-bold">{currentUser?.name} !</span></h6>
            </div>
        </div>
    );
};

export default Header;
