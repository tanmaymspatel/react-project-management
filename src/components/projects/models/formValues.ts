export class ProjectFormDetails {
    id?: string;
    projectName: string;
    description: string;

    constructor(projectName: string, description: string) {
        this.projectName = projectName;
        this.description = description;
    }
}