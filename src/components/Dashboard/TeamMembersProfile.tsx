function TeamMembersProfile({ id, profilePicture }: any) {
    return (
        <figure key={id} className="default-avatar rounded-circle member-overlap-item">
            <img src={profilePicture} alt="profile" title="profile image" />
        </figure>
    )
}

export default TeamMembersProfile;
