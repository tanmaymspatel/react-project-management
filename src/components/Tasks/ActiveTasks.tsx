import TaskList from "./TaskList";

function ActiveTasks(props: any) {

  const { activeTaskList } = props;

  console.log({ activeTaskList });


  const activeList = activeTaskList?.map((item: any) => {
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
      {activeList}
    </div>
  )
}

export default ActiveTasks;
