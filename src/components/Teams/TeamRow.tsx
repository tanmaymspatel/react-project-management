interface TeamRowProps {
    profilePicture: string,
    name: string,
    emailId: string,
    designation: string,
    status: string
}
/**
 * @returns a row of table containing the team member details  
 */
function TeamRow({ profilePicture, name, emailId, designation, status }: TeamRowProps) {

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
