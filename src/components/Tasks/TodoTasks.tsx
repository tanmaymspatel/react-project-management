import { useEffect } from "react";
import { useParams } from "react-router-dom";

import useDragDrop from "../Hooks/useDragDrop";
import useTaskData from "../Hooks/useTaskData";
import { ITaskDetails } from "../projects/models/formValues";
import TaskList from "./TaskList";

function TodoTasks() {

    const { id } = useParams()

    const [todoList, , , , setTodoList] = useTaskData(id as string);

    /**
     * @description Using the properties of the custom drag and drop hook
     */
    const [dragging, draggingItemIndex, handleDragStart, handleDragEnter, handleDragEnd, newList] = useDragDrop(todoList as ITaskDetails[])

    useEffect(() => {
        setTodoList(newList);
    }, [newList, setTodoList]);
    /**
     * @description Rendering of the list with the props related to drag functionality
     */
    const todoTaskList = (todoList as ITaskDetails[])?.map((item: any, index: number) => {
        return (
            <div
                key={index}
                draggable
                onDragStart={(e) => handleDragStart(e, index)}
                onDragEnter={(e) => handleDragEnter(e, index)}
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
                <span>Todo List </span>
                <span className="ps-2">({todoList?.length})</span>
            </h6>
        </div>
        <div className="h-100 px-1 overflow-y-auto">
            {todoTaskList}
        </div>
    </>
    );
};

export default TodoTasks;

