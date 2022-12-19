import { useContext } from "react";

import TeamContext from "../../contexts/user-context/teamContext";
import Button from "../../shared/components/UI/Button";
import Model from "../../shared/components/UI/Model";

function AddTeamMember() {
    const { closeOverlay } = useContext(TeamContext);
    console.log(closeOverlay);


    return (
        <Model>
            <h4>Add new team member</h4>
            <Button className="btn btn-danger text-light" type="button" handleClick={closeOverlay}>Close</Button>
        </Model>
    );
};

export default AddTeamMember;
