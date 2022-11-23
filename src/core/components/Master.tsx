import { Outlet, useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Header from "./Header";
import Sidebar from "./Sidebar";
import { useEffect } from "react";

function Master() {
    const { isLoading } = useAuth0();
    const { id } = useParams();
    const currentId = Number(id)

    useEffect(() => {
        console.log(typeof currentId);
    },)

    if (isLoading) {
        return <h6>Loading...</h6>
    }

    return (
        <div className="d-flex h-100">
            <aside id="sidebar" className="h-100 d-flex flex-column bg-secondary text-light overflow-hidden" >
                <Sidebar currentId={currentId} />
            </aside>
            <div className="flex-grow-1 d-flex flex-column">
                <header id='header' className="d-flex align-items-center px-4 bg-info flex-shrink-0">
                    <Header />
                </header>
                <main className="d-flex flex-column flex-grow-1 bg-primary p-4 overflow-hidden">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Master;
