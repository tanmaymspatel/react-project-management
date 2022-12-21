function TeamRow(props: any) {

    const { profilePicture, name, emailId, designation, status } = props;

    return (
        <>
            <td>
                <figure className="default-avatar rounded-circle m-0">
                    <img src={profilePicture} alt="profile" title="profile image" />
                </figure>
            </td>
            <td>{name}</td>
            <td>{emailId}</td>
            <td>{designation}</td>
            <td>{status}</td>
        </>
    )
}

export default TeamRow
