import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import useDragDrop from "../Hooks/useDragDrop";
import useTaskData from "../Hooks/useTaskData";
import { ITaskDetails } from "../projects/models/formValues";
import TaskList from "./TaskList";

function CompletedTasks() {
    const { id } = useParams()
    const [, , completedTaskList, , setCompletedTaskList] = useTaskData(id as string)

    /**
     * @description Using the properties of the custom drag and drop hook
     */
    const [dragging, draggingItemIndex, handleDragStart, handleDragEnter, handleDragEnd, newList] = useDragDrop(completedTaskList as ITaskDetails[]);

    useEffect(() => {
        setCompletedTaskList(newList);
    }, [newList, setCompletedTaskList])
    /**
     * @description Rendering of the list with the props related to drag functionality
     */
    const completedList = completedTaskList && (completedTaskList as ITaskDetails[])?.map((item: any, index: number) => {
        return (
            <div
                key={index}
                draggable
                onDragStart={(e) => handleDragStart(index)}
                onDragEnter={(e) => handleDragEnter(index)}
                onDragEnd={handleDragEnd}
                onDragOver={(e) => e.preventDefault()}
                className={`${dragging && index === draggingItemIndex ? "dragged-item" : "null"}`}
            >
                <TaskList
                    key={index}
                    id={item?.id}
                    taskName={item?.taskName}
                    subTasks={item?.subTasks}
                    status={item?.status}
                    priority={item?.priority}
                />
            </div>
        );
    });

    return (<>
        <div className="p-1">
            <h6>
                <span>Completed Task</span>
                <span className="ps-2">({completedTaskList?.length})</span>
            </h6>
        </div>
        <div className="h-100 px-1 overflow-y-auto">
            {completedList}
        </div>
    </>
    );
}

export default React.memo(CompletedTasks)
