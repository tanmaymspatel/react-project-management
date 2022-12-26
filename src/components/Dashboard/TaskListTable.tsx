import { TaskDetails } from "../projects/models/formValues";
import SingleTask from "./SingleTask";

interface ITaskListTable {
    taskList: TaskDetails[]
}

/**
 * @returns Table which is to be shown on the dashboard 
 */
function TaskListTable({ taskList }: ITaskListTable) {

    /**
     * @description task List associated with the selected project
     */
    const taskData = taskList?.slice(0, 4)?.map((task: TaskDetails, index: number) => {
        return (
            <SingleTask
                key={index}
                status={task.status}
                taskName={task.taskName}
                priority={task.priority}
            />
        )
    })

    return (
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
    );
};

export default TaskListTable;
