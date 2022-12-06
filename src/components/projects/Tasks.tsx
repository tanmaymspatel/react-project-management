import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../../contexts/user-context/userContext";
import projectServices from "../../services/projectServices";
import Button from "../../shared/components/UI/Button";
import utlityServices from "../../shared/services/utilityServices";
import ActiveTasks from "../Tasks/ActiveTasks";
import CompletedTasks from "../Tasks/CompletedTasks";
import TodoTasks from "../Tasks/TodoTasks";

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

    /**
     * @description To set the header title and remove active class when the component is loaded
     */
    useEffect(() => {
        setHeaderTitle('Tasks');
        removeProjectsActiveClass(id);
        return () => { };
    });

    const { getProjectDetailsById } = projectServices;
    const [todoList, setTodoList] = useState<any>([])
    const [activeTaskList, setActiveTaskList] = useState<any>([])
    const [completedTaskList, setCompletedTaskList] = useState<any>([])

    useEffect(() => {
        async function getData() {
            getProjectDetailsById(id as string)
                .then((res: any) => {
                    setTodoList(res.data.todoList)
                    setActiveTaskList(res.data.activeTaskList)
                    setCompletedTaskList(res.data.completedTaskList)
                });
        };
        getData();
    }, [id, getProjectDetailsById]);


    return (
        <div className="h-100 px-4 d-flex flex-column">
            <div className="text-end pt-1 pb-4">
                <Button type="button" className="btn btn-secondary" >+ New Task</Button>
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