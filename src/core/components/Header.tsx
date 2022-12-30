import { useContext, useEffect, useState } from "react"
import { IUserDetails } from "../../components/projects/models/user.model";
import SearchProvider from "../../contexts/searchContext/SearchProvider";

import UserContext from "../../contexts/user-context/userContext";
import Search from "./Search";

/**
 * @name Header
 * @returns Header of the aplication
 */
function Header() {

    const [url, setUrl] = useState<string>('');
    const [isTeamPage, setIsTeamPage] = useState<boolean>(false);
    /**
     * @description condition for current path is team page or not
     */
    useEffect(() => {
        setUrl(window.location.href);
        let urlArr = url.split("/");
        setIsTeamPage((urlArr[urlArr.length - 1]) === 'teams');
    }, [url]);
    /**
     * @description headertitle - To show the respective page title in the header
     * @description currentUser - details of the logged in user
     */
    const { headerTitle, currentUser } = useContext(UserContext);

    return (
        <div className="h-100 d-flex align-items-center justify-content-between ps-5 pe-2 px-md-4">
            {/* Page title in the header*/}
            <h4 className="flex-grow-1 mx-1 mx-sm-0">{headerTitle}</h4>
            {/* search functionality */}
            <SearchProvider>
                {isTeamPage ? <Search /> : null}
            </SearchProvider>
            <div className="d-flex align-items-center pe-1 ps-md-2 pe-md-4">
                {/* avatar of the logged in user */}
                <figure className="header-profile-img m-0 d-none d-md-block">
                    <img className="img-fluid rounded-circle" src={(currentUser as IUserDetails)?.picture} alt="Profile" />
                </figure>
                {/* Name of the logged in user */}
                <h6 className="m-0 ps-2">Welcome, <span className="fw-bold">{(currentUser as IUserDetails)?.name} !</span></h6>
            </div>
        </div>
    );
};

export default Header;
