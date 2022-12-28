import { useEffect } from "react";
import { useParams } from "react-router-dom";

import useDragDrop from "../Hooks/useDragDrop";
import useTaskData from "../Hooks/useTaskData";
import { ITaskDetails } from "../projects/models/formValues";
import TaskList from "./TaskList";

/**
 * @returns List of active tasks
 */
function ActiveTasks() {

  const { id } = useParams()

  const [, activeTaskList, , setActiveTaskList] = useTaskData(id as string);

  /**
   * @description Using the properties of the custom drag and drop hook
   */
  const [dragging, draggingItemIndex, handleDragStart, handleDragEnter, handleDragEnd, newList] = useDragDrop(activeTaskList as ITaskDetails[]);

  useEffect(() => {
    setActiveTaskList(newList);
  }, [newList, setActiveTaskList])

  /**
   * @description Rendering of the list with the props related to drag functionality
   */
  const activeList = (activeTaskList as ITaskDetails[])?.map((item: any, index: number) => {
    return (
      <div
        key={index}
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
