/**
 * @returns cardhaving details of total no tasks in the current project 
 */
function TaskStates({ taskList }: any) {

    return (
        <div className="card p-3 d-flex flex-row justify-content-between">
            <div>
                <p className="pb-4">{taskList?.length}</p>
                <h6 className="m-0 py-2">Tasks</h6>
            </div>
            <div>
                <span className="icon-task fs-4 mt-3"></span>
            </div>
        </div>
    );
};

export default TaskStates;
