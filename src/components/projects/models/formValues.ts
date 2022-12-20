/**
 *@description data model for the project details
 */
export class ProjectFormDetails {
    id?: string;
    projectName: string;
    description: string;
    duration: string;
    cost: string;
    todoList?: TaskDetails[];
    activeTaskList?: TaskDetails[];
    completedTaskList?: TaskDetails[]

    constructor(projectName: string, description: string, duration: string, cost: string) {
        this.projectName = projectName;
        this.description = description;
        this.duration = duration;
        this.cost = cost;
    }
}

/**
 * @description single task model
 */
export class TaskDetails {
    id?: string;
    taskName: string;
    status: string;
    priority: string;
    subTasks?: SubTaskDetails[];

    constructor(taskName: string, status: string, priority: string) {
        this.taskName = taskName;
        this.status = status;
        this.priority = priority;
    }
}

/**
 * @description sub task model
 */
export class SubTaskDetails {
    id?: string;
    subTaskName: string;
    isCompleted?: boolean;

    constructor(subTaskName: string, isCompleted: boolean) {
        this.subTaskName = subTaskName;
        this.isCompleted = isCompleted;
    }
}

/**
 *@description data model for the team member details
 */
export class TeamMemberDetails {
    id?: string;
    name: string;
    profilePicture: string;
    emailId: string;
    status: string;
    designation: string;

    constructor(name: string, profilePicture: string, emailId: string, status: string, designation: string) {
        this.name = name;
        this.profilePicture = profilePicture;
        this.emailId = emailId;
        this.status = status;
        this.designation = designation;
    }
}