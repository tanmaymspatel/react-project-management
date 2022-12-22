import { useRef, useState } from "react";
import { TaskDetails } from "../projects/models/formValues";

function useDragDrop(list: TaskDetails[], setList: React.Dispatch<React.SetStateAction<TaskDetails[]>>) {


    const [dragging, setDragging] = useState<boolean>(false);
    const draggingItem = useRef<any>(null);
    const dragOverItem = useRef<any>(null);
    let draggingItemIndex: any = null;

    /**
     * @name handleDragStart
     * @description store the value of item is being dragged
     * @param position Index of the list item which is being dragged
     */
    const handleDragStart = (position: any) => {
        setDragging(true);
        draggingItem.current = position;
        draggingItemIndex = draggingItem.current
    };

    /**
     * @name handleDragEnter
     * @description Store the index value of the item on which the item is being dragged
     * @param position Index of the items on which the draggable list item is being dragged over
     */
    const handleDragEnter = (position: any) => {
        dragOverItem.current = position;
    };

    /**
     * @name handleDragEnd
     * @description Switch positions after the dragged item is placed
     */
    const handleDragEnd = () => {
        const listCopy = JSON.parse(JSON.stringify(list)) // copying the existing list
        const draggingItemContent = listCopy[draggingItem.current]; // content of item which is being dragged
        listCopy.splice(draggingItem.current, 1);
        listCopy.splice(dragOverItem.current, 0, draggingItemContent);
        draggingItem.current = null;
        dragOverItem.current = null;
        setList(listCopy);
        setDragging(false);
    };

    return [dragging, draggingItemIndex, handleDragStart, handleDragEnter, handleDragEnd];
}

export default useDragDrop;
