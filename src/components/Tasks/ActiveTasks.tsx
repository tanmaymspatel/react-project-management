import { useContext } from "react";

import TaskContext from "../../contexts/user-context/taskContext";
import useDragDrop from "../Hooks/useDragDrop";
import TaskList from "./TaskList";

/**
 * @returns List of active tasks
 */
function ActiveTasks() {

  const { activeTaskList, setActiveTaskList } = useContext(TaskContext);
  /**
   * @description Using the properties of the custom drag and drop hook
   */
  const [dragging, draggingItemIndex, handleDragStart, handleDragEnter, handleDragEnd] = useDragDrop(activeTaskList, setActiveTaskList);
  /**
   * @description Rendering of the list with the props related to drag functionality
   */
  const activeList = activeTaskList?.map((item: any, index: number) => {
    return (
      <div
        key={item.id}
        draggable
        onDragStart={() => handleDragStart(index)}
        onDragEnter={() => handleDragEnter(index)}
        onDragEnd={handleDragEnd}
        onDragOver={(e) => e.preventDefault()}
        className={`${dragging && index === draggingItemIndex ? "dragged-item" : "null"}`}
      >
        <TaskList
          id={item.id}
          taskName={item.taskName}
          subTasks={item.subTasks}
          status={item.status}
          priority={item.priority}
        />
      </div>
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
