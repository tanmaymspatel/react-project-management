interface ITeamProfile {
    id: string,
    profilePicture: string
}

function TeamMembersProfile({ id, profilePicture }: ITeamProfile) {
    return (
        <figure key={id} className="default-avatar rounded-circle member-overlap-item">
            <img src={profilePicture} alt="profile" title="profile image" />
        </figure>
    )
}

export default TeamMembersProfile;
