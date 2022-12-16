import { NavLink, useParams } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";


function TaskList({ taskList }: any) {
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

    const taskData = taskList?.slice(0, 4)?.map((task: any, index: number) => {
        return (
            <tr key={index}>
                <td>{task?.status}</td>
                <td>{task?.taskName}</td>
                <td>
                    <p className="mb-0">
                        <span className={`${task.priority === 'low' ? "bg-success" :
                            task.priority === 'medium' ? "bg-secondary" :
                                task.priority === 'high' ? "bg-danger" : null} px-3 py-1 rounded-circle`}>
                        </span>
                    </p>
                </td>
            </tr>
        )
    })

    return (
        <div className="card p-2">
            <div className="d-flex align-items-center justify-content-between p-3">
                <h5>Tasks</h5>
                <NavLink className='nav-link d-flex align-items-center border-radius' to={'/' + name + '/projects/' + id + '/tasks'}>
                    <span className='nav-text text-nowrap text-secondary ps-2'>View All</span>
                </NavLink>
            </div>
            <table className="table table-hover w-100 text-center">
                <thead>
                    <tr className="text-uppercase">
                        <th>Status</th>
                        <th>Name</th>
                        <th>priority</th>
                    </tr>
                </thead>
                <tbody>
                    {taskData}
                </tbody>
            </table>
        </div>
    );
};

export default TaskList;
