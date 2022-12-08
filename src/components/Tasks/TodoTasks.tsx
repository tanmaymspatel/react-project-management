
import TaskList from "./TaskList";

function TodoTasks(props: any) {

    const { todoList } = props;

    const todoTaskList = todoList?.map((item: any) => {
        return (
            <TaskList openOverlay={props.openOverlay} key={item.id}
                id={item.id}
                taskName={item.taskName}
                completedSubTasks={item.completedSubTasks}
                totalSubTasks={item.totalSubTasks}
                status={item.status}
                priority={item.priority}
            />
        );
    });

    return (
        <div className="h-100 px-1 overflow-y-auto">
            {todoTaskList}
        </div>
    );
};

export default TodoTasks;

