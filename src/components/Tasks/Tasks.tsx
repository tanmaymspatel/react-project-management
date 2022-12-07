import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../../contexts/user-context/userContext";

import projectServices from "../../services/projectServices";
import Button from "../../shared/components/UI/Button";
import utlityServices from "../../shared/services/utilityServices";
import ActiveTasks from "./ActiveTasks";
import CompletedTasks from "./CompletedTasks";
import NewTask from "./NewTask";
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
    const { updateProject } = projectServices;

    const [isOpen, setIsOpen] = useState(false);

    const closeOverlay = () => {
        setIsOpen(false);
    };

    const openOverlay = () => {
        setIsOpen(true);
    };

    /**
     * @description To set the header title and remove active class when the component is loaded
     */
    useEffect(() => {
        setHeaderTitle('Tasks');
        removeProjectsActiveClass(id);
    });

    const { getProjectDetailsById } = projectServices;
    const [projectDetails, setProjectDetails] = useState<any>({});
    const [todoList, setTodoList] = useState<any>([]);
    const [activeTaskList, setActiveTaskList] = useState<any>([]);
    const [completedTaskList, setCompletedTaskList] = useState<any>([]);

    async function getData() {
        getProjectDetailsById(id as string)
            .then((res: any) => {
                setProjectDetails(res.data);
                setTodoList(res.data.todoList);
                setActiveTaskList(res.data.activeTaskList);
                setCompletedTaskList(res.data.completedTaskList);
            });
    };

    useEffect(() => {
        getData();
    }, [id, getProjectDetailsById]);

    const modifyProjectDetails = async (values: any) => {
        console.log(projectDetails);
        if (values.status === 'todo') {
            setTodoList((prevList: any) => [...prevList, values]);
            setProjectDetails((prev: any) => ({ ...prev, todoList }))
            console.log(projectDetails);
            // updateProject(id, projectDetails);

            // setProjectDetails((prev:any) => {..prev, to})
        }
        else if (values.status === 'active') {
            setActiveTaskList((prevList: any) => [...prevList, values]);
            setProjectDetails((prev: any) => ({ ...prev, activeTaskList }))
            console.log(projectDetails);
            // updateProject(id, projectDetails);
        }
        else if (values.status === 'completed') {
            setCompletedTaskList((prevList: any) => [...prevList, values]);
            setProjectDetails((prev: any) => ({ ...prev, completedTaskList }))
            console.log(projectDetails);
        };
        await updateProject(id, projectDetails);
    };


    return (
        <div className="h-100 px-4 d-flex flex-column">
            <div className="text-end pt-1 pb-4">
                <Button type="button" className="btn btn-secondary" handleClick={openOverlay}>+ New Task</Button>
                {isOpen ? <NewTask closeOverlay={closeOverlay} modifyProjectDetails={modifyProjectDetails} /> : null}
            </div>
            <div className="flex-grow-1 overflow-hidden py-2">
                <div className="row h-100">
                    <div className="col-4 h-100 d-flex flex-column overflow-hidden">
                        <div className="p-1">
                            <h6>
                                <span>Todo List </span>
                                <span className="ps-2">({todoList.length})</span>
                            </h6>
                        </div>
                        <TodoTasks todoList={todoList} />
                    </div>
                    <div className="col-4 h-100 d-flex flex-column overflow-hidden">
                        <div className="p-1">
                            <h6>
                                <span>Active Task</span>
                                <span className="ps-2">({activeTaskList.length})</span>
                            </h6>
                        </div>
                        <ActiveTasks activeTaskList={activeTaskList} />
                    </div>
                    <div className="col-4 h-100 d-flex flex-column overflow-hidden">
                        <div className="p-1">
                            <h6>
                                <span>Completed Task</span>
                                <span className="ps-2">({completedTaskList.length})</span>
                            </h6>
                        </div>
                        <CompletedTasks completedTaskList={completedTaskList} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tasks;