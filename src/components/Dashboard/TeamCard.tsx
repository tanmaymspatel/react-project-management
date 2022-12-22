import TeamMembersProfile from "./TeamMembersProfile";

/**
 * @returns a single team members statistics card 
 */
function TeamCard(props: any) {

    const { department, teamMembers } = props;

    return (
        <div className="col-3 text-center">
            <h6 className="py-2">{department}</h6>
            <div className="d-flex align-items-center justify-content-center">
                {
                    teamMembers?.splice(0, 2)?.map((member: any) => {
                        return <TeamMembersProfile key={member.id} id={member.id} profilePicture={member.profilePicture} />
                    })
                }
                <p
                    className="default-avatar bg-dark rounded-circle member-overlap-item d-flex align-items-center justify-content-center">
                    <small className="text-light"> + {teamMembers?.length} </small>
                </p>
            </div>
        </div>
    );
};

export default TeamCard;
