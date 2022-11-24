import { Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Header from "./Header";
import Sidebar from "./Sidebar";
import { useEffect } from "react";
import UserProvider from "../../contexts/user-context/UserProvider";

function Master() {
    const { isLoading } = useAuth0();
    // const { id } = useParams();
    // const currentId = Number(id)

    useEffect(() => {
        // console.log(typeof currentId);
    },)

    if (isLoading) {
        return <h4>Loading...</h4>
    }

    return (
        <UserProvider>
            <div className="d-flex h-100">
                <div className="h-100 position-relative" >
                    <Sidebar />
                </div>
                <div className="flex-grow-1 d-flex flex-column">
                    <header id='header' className="bg-info">
                        <Header />
                    </header>
                    <main className="d-flex flex-column flex-grow-1 bg-primary p-4 overflow-hidden">
                        <Outlet />
                    </main>
                </div>
            </div>
        </UserProvider>
    );
};

export default Master;
