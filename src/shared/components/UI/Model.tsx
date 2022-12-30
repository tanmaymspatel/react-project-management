import { useContext } from 'react';
import * as ReactDOM from 'react-dom';

import TaskContext from '../../../contexts/taskContext/taskContext';
import TeamContext from '../../../contexts/teamContext/teamContext';
/**
 * @returns backdrop to close the overlay, when clicked outside of the content 
 */
const Backdrop = () => {

    const { closeOverlay } = useContext(TaskContext);
    const { closeTeamOverlay } = useContext(TeamContext);

    return <div className="backdrop position-fixed top-0 start-0 w-100 vh-100 bg-dark bg-opacity-25"
        onClick={() => { closeOverlay(); closeTeamOverlay() }} >
    </div>
};
/**
 * @returns content to be shown in the
 */
const ModelOverlay = (props: any) => {
    return <div className="model position-fixed p-3 rounded-4 shadow-lg bg-light">
        <div className="content">{props.children}</div>
    </div>
}
const portalEl = document.getElementById('overlay')!;
/**
 * @returns A overlay component to display anything in the overlay  
 */
function Model(props: any) {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop />, portalEl)}
            {ReactDOM.createPortal(<ModelOverlay>{props.children}</ModelOverlay>, portalEl)}
        </>
    )
};

export default Model;
