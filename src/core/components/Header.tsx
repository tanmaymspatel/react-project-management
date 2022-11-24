import { useContext, useEffect } from "react"

import UserContext from "../../contexts/user-context/userContext";

function Header() {

    const { headerTitle, user } = useContext(UserContext);

    useEffect(() => {
        console.log(user);

    });

    return (
        <div className="h-100 d-flex align-items-center justify-content-between ps-5 pe-2 px-md-4">
            <h4 className="flex-grow-1">{headerTitle}</h4>
            <div className="d-flex align-items-center pe-1 px-md-5">
                <figure className="header-profile-img m-0 d-none d-md-block">
                    <img className="img-fluid rounded-circle" src={user?.picture} alt="Profile" />
                </figure>
                <h6 className="m-0 ps-2">Welcome, <span className="fw-bold">{user?.nickname} !</span></h6>
            </div>
        </div>
    );
};

export default Header;
