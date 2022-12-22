import SingleTask from "./SingleTask";

/**
 * @returns Table which is to be shown on the dashboard 
 */
function TaskListTable(props: any) {

    const { taskList } = props;

    /**
     * @description task List associated with the selected project
     */
    const taskData = taskList?.slice(0, 4)?.map((task: any, index: number) => {
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
