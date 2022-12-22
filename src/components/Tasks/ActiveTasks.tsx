import { useContext, useRef, useState } from "react";
import TaskContext from "../../contexts/user-context/taskContext";
import TaskList from "./TaskList";

function ActiveTasks() {

  const { activeTaskList, setActiveTaskList } = useContext(TaskContext);
  const [dragging, setDragging] = useState<boolean>(false)

  const draggingItem = useRef<any>(null);
  const dragOverItem = useRef<any>(null);

  const handleDragStart = (e: any, position: any) => {
    setDragging(true);
    draggingItem.current = position;
  };

  const handleDragEnter = (e: any, position: any) => {
    dragOverItem.current = position;
  };

  const handleDragEnd = (e: any) => {
    const listCopy = JSON.parse(JSON.stringify(activeTaskList))
    const draggingItemContent = listCopy[draggingItem.current];
    listCopy.splice(draggingItem.current, 1);
    listCopy.splice(dragOverItem.current, 0, draggingItemContent);
    draggingItem.current = null;
    dragOverItem.current = null;
    setActiveTaskList(listCopy);
    setDragging(false);
  };

  const activeList = activeTaskList?.map((item: any, index: number) => {
    return (
      <div
        key={item.id}
        draggable
        onDragStart={(e) => handleDragStart(e, index)}
        onDragEnter={(e) => handleDragEnter(e, index)}
        onDragEnd={handleDragEnd}
        onDragOver={(e) => e.preventDefault()}
        className={`${dragging && index === draggingItem.current ? "dragged-item" : "null"}`}
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
