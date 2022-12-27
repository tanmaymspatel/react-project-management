/**
 *@description data model for the project details
 */
export interface IProjectFormDetails {
    id?: string;
    projectName: string;
    description: string;
    duration: string;
    cost: string;
    todoList?: ITaskDetails[];
    activeTaskList?: ITaskDetails[];
    completedTaskList?: ITaskDetails[]
}
/**
 * @description single task model
 */
export interface ITaskDetails {
    id?: string;
    taskName: string;
    status: string;
    priority: string;
    subTasks?: ISubTaskDetails[];
}
/**
 * @description sub task model
 */
export interface ISubTaskDetails {
    id?: string;
    subTaskName: string;
    isCompleted?: boolean;
}