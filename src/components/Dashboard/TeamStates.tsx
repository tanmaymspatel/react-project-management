import TeamMembersProfile from "./TeamMembersProfile";

function TeamStates({ teamMembers }: any) {

    const teamCards = teamMembers?.map((team: any, index: any) => {
        return (
            <div className="col-3 text-center" key={index}>
                <h6 className="py-2">{team?.department}</h6>
                <div className="d-flex align-items-center justify-content-center">
                    {
                        team?.teamMembers?.splice(0, 2)?.map((member: any) => {
                            return <TeamMembersProfile key={member.id} id={member.id} profilePicture={member.profilePicture} />
                        })
                    }
                    <p
                        className="default-avatar bg-dark rounded-circle member-overlap-item d-flex align-items-center justify-content-center">
                        <small className="text-light"> + {team?.teamMembers?.length} </small>
                    </p>
                </div>
            </div>
        );
    });

    return (
        <div className="card row flex-row g-0 px-2 py-3">
            {teamCards}
        </div>
    );
};

export default TeamStates;


