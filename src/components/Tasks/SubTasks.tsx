import { useContext } from "react";
import TaskContext from "../../contexts/user-context/taskContext";
import Button from "../../shared/components/UI/Button";
import Model from "../../shared/components/UI/Model";

function SubTasks() {

    const { closeOverlay } = useContext(TaskContext)
    return (
        <Model>
            <div className="text-end">
                <Button type="button" className="btn btn-danger text-light" handleClick={closeOverlay}>X</Button>
            </div>
            <div>
                subTask
            </div>
        </Model>
    );
};

export default SubTasks;
