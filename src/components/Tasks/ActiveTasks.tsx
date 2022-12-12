import { useContext } from "react";
import TaskContext from "../../contexts/user-context/taskContext";
import TaskList from "./TaskList";

function ActiveTasks() {

  const { activeTaskList } = useContext(TaskContext);

  const activeList = activeTaskList?.map((item: any) => {
    return (
      <TaskList key={item.id}
        id={item.id}
        taskName={item.taskName}
        subTasks={item.subTasks}
        status={item.status}
        priority={item.priority}
      />
    );
  });
  return (<>
    <div className="p-1">
      <h6>
        <span>Active Task</span>
        <span className="ps-2">({activeTaskList?.length})</span>
      </h6>
    </div>
    <div className="h-100 px-1 overflow-y-auto">
      {activeList}
    </div>
  </>
  )
}

export default ActiveTasks;
