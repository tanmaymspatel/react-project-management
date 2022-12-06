function TaskList(props: any) {
    return (
        <div className="card my-2 p-3">
            <div className="d-flex justify-content-between align-items-center">
                <p className="py-2 mb-0">{props.taskName}</p>
                <p className="mb-0 py-2 card-actions">
                    <span className="icon-edit text-secondary cursor-pointer p-1"></span>
                    <span className="icon-delete text-danger cursor-pointer ms-2 p-1"></span>
                </p>
            </div>
            <div className="progress-bar">
                <p className="mb-0">-------------------------</p>
                <p className="text-end mb-0">
                    <span className="icon-task me-2"></span>
                    <span>{props.completedSubTasks.length}/{props.totalSubTasks.length}</span>
                </p>
            </div>
            <div className="d-flex justify-content-between align-items-center pt-2">
                <p className="py-1 mb-0">{props.priority}</p>
                <p className="mb-0"><span className={`${props.status === 'todo' ? "bg-primary" : props.status === 'active' ? "bg-secondary" : props.status === 'completed' ? "bg-success" : null} d-flex p-1 rounded-circle`}></span></p>
            </div>
        </div>
    );
};

export default TaskList;
