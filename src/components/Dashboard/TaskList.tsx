import { NavLink, useParams } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import TaskListTable from './TaskListTable';
import { ITaskDetails } from '../projects/models/formValues';

interface ITaskList {
    taskList: ITaskDetails[]
}
/**
 * @returns a tasklist to be showed on the dashboard
 */
function TaskList({ taskList }: ITaskList) {
    /**
    * @description id of project
    */
    const { id } = useParams();
    /**
    * @description user : Object of deatails of logged in user
    */
    const { user } = useAuth0();
    /**
    * @description Name of the logged in user
    */
    const name = user?.nickname;

    return (
        <div className="card p-2">
            <div className="d-flex align-items-center justify-content-between p-3">
                <h5>Tasks</h5>
                <NavLink className='nav-link d-flex align-items-center border-radius' to={'/' + name + '/projects/' + id + '/tasks'}>
                    <span className='nav-text text-nowrap text-secondary ps-2'>View All</span>
                </NavLink>
            </div>
            <TaskListTable taskList={taskList} />
        </div>
    );
};

export default TaskList;
