import { useContext } from "react";
import TaskContext from "../../contexts/user-context/taskContext";

function TaskList({ openOverlay, ...taskDetails }: any) {

    const { setTaskTobeEdited, setIsEdit } = useContext(TaskContext);

    const editHandler = (task: any) => {
        openOverlay();
        setIsEdit(true);
        setTaskTobeEdited(task);
    }

    return (
        <div className="card my-2 p-3 cursor-pointer">
            <div className="d-flex justify-content-between align-items-center">
                <p className="py-2 mb-0">{taskDetails.taskName}</p>
                <p className="mb-0 py-2 card-actions">
                    <span className="icon-edit text-secondary cursor-pointer p-1" onClick={() => editHandler(taskDetails)}></span>
                </p>
            </div>
            <div className="progress-bar">
                <p className="mb-0">-------------------------</p>
                <p className="text-end mb-0">
                    <span className="icon-task me-2"></span>
                    <span>{taskDetails.completedSubTasks.length}/{taskDetails.totalSubTasks.length}</span>
                </p>
            </div>
            <div className="d-flex justify-content-start align-items-center pt-2">
                <p className="mb-0"><span className={`${taskDetails.priority === 'low' ? "bg-success" : taskDetails.priority === 'medium' ? "bg-secondary" : taskDetails.priority === 'high' ? "bg-danger" : null} d-flex p-1 rounded-circle`}></span></p>
                <p className="py-1 mb-0 ms-1">{taskDetails.priority}</p>
            </div>
        </div>
    );
};

export default TaskList;
