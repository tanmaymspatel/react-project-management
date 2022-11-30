export class ProjectFormDetails {
    id?: string;
    projectName: string;
    description: string;
    duration: string;
    cost: string;

    constructor(projectName: string, description: string, duration: string, cost: string) {
        this.projectName = projectName;
        this.description = description;
        this.duration = duration;
        this.cost = cost;
    }
}