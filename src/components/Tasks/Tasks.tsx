import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import TaskContext from "../../contexts/user-context/taskContext";
import UserContext from "../../contexts/user-context/userContext";
import Button from "../../shared/components/UI/Button";
import utlityServices from "../../shared/services/utilityServices";
import ActiveTasks from "./ActiveTasks";
import CompletedTasks from "./CompletedTasks";
import NewTask from "./NewTask";
import SubTasks from "./SubTasks";
import TodoTasks from "./TodoTasks";

/** 
 * @name Tasks
 * @returns Tasks of a selected id of a project
 */
function Tasks() {
    /**
     * @description project id which is clicked
     */
    const { id } = useParams();

    /**
     * @description Set the title of header to "Dashboard" when click on the dashboard link
     */
    const { setHeaderTitle } = useContext(UserContext);
    /**
     * @description Remove active class from projects link when the dashboard link is selected
     */
    const { removeProjectsActiveClass } = utlityServices;
    const { isOpen, openOverlay, setId, isSubTaskOpen } = useContext(TaskContext);

    /**
     * @description To set the header title and remove active class when the component is loaded
     */
    useEffect(() => {
        setHeaderTitle('Tasks');
        removeProjectsActiveClass(id);
        setId(id);
    }, [id, removeProjectsActiveClass, setHeaderTitle, setId]);

    return (
        <div className="h-100 px-4 d-flex flex-column">
            <div className="text-end pt-1 pb-4">
                <Button type="button" className="btn btn-secondary" handleClick={() => openOverlay("NEW_TASK_OVERLAY")}>+ New Task</Button>
                {isOpen ? <NewTask /> : null}
                {isSubTaskOpen ? <SubTasks /> : null}

            </div>
            <div className="flex-grow-1 overflow-hidden py-2">
                <div className="row h-100">
                    <div className="col-4 h-100 d-flex flex-column overflow-hidden">
                        <TodoTasks />
                    </div>
                    <div className="col-4 h-100 d-flex flex-column overflow-hidden">
                        <ActiveTasks />
                    </div>
                    <div className="col-4 h-100 d-flex flex-column overflow-hidden">
                        <CompletedTasks />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tasks;