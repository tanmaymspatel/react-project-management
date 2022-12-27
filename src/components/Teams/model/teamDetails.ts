// Individual member details model
export interface IMemberDetails {
    id?: string,
    name: string,
    profilePicture: string,
    emailId: string,
    status: string,
    designation: string
}

// Department details model
export interface ITeamDepartment {
    department: string,
    teamMembers: IMemberDetails[]
}

// General model for teams
export interface ITeamDetails {
    id: string,
    members: ITeamDepartment[]
}