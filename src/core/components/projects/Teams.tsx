import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Teams() {
    const params = useParams();

    useEffect(() => {
        console.log(params)
    });

    return (
        <div>
            Teams
        </div>
    )
};

export default Teams;
