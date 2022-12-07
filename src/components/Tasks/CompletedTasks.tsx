import TaskList from "./TaskList";

function CompletedTasks(props: any) {

    const { completedTaskList } = props;

    console.log({ completedTaskList });


    const completedList = completedTaskList?.map((item: any) => {
        return (
            <TaskList key={item.taskName}
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
            {completedList}
        </div>
    );
}

export default CompletedTasks
