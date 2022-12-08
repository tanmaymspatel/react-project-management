import TaskList from "./TaskList";

function ActiveTasks(props: any) {

  const { activeTaskList } = props;

  const activeList = activeTaskList?.map((item: any) => {
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
      {activeList}
    </div>
  )
}

export default ActiveTasks;
