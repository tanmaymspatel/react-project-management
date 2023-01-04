interface ISingleTeamMemberCardProps {
    index: number,
    profilePicture: string,
    status: string,
    name: string,
    designation: string,
    emailId: string,
}
/**
 * @returns A single team member card  
 */
function SingleTeamMemberCard({ index, profilePicture, status, name, designation, emailId }: ISingleTeamMemberCardProps) {
    return (
        <div className="col-sm-6">
            <div className="card py-3 px-3">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="col-5">
                        <figure className="default-avatar rounded-circle m-0">
                            <img src={profilePicture} alt="profile" title="profile image" />
                        </figure>
                        <span>{status}</span>
                    </div>
                    <div className="col-7">
                        <h5 className="fs-6 fw-bold">{name}</h5>
                        <h6 className="text-nowrap text-truncate" title={designation}>{designation}</h6>
                        <h6 className="text-nowrap text-truncate" title={emailId}>{emailId}</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleTeamMemberCard
