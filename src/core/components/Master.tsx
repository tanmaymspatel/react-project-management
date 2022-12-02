import { useAuth0 } from "@auth0/auth0-react";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Loader from "../../shared/components/UI/Loader";
import ProtectedRoute from "./ProtectedRoute";

/**
 * @returns a page containing header, sidebar and other routed components
 */
function Master() {

    /**
     * @description To do some action when the componenet is loading
     */
    const { isLoading } = useAuth0();

    /**
     * @description Shows a loader when the componenet is loading
     */
    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="d-flex h-100">
            <div className="h-100 position-relative" >
                <Sidebar />
            </div>
            <div className="flex-grow-1 d-flex flex-column">
                <header id='header' className="bg-info">
                    <Header />
                </header>
                <main className="d-flex flex-column flex-grow-1 bg-primary p-4 overflow-hidden">
                    {/* <Outlet /> */}
                    <ProtectedRoute />
                </main>
            </div>
        </div>
    );
};

export default Master;
