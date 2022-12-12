import { useContext } from 'react';
import * as ReactDOM from 'react-dom';
import TaskContext from '../../../contexts/user-context/taskContext';


const Backdrop = () => {

    const { closeOverlay } = useContext(TaskContext);

    return <div className="backdrop position-fixed top-0 start-0 w-100 vh-100 bg-dark bg-opacity-25"
        onClick={closeOverlay} >
    </div>
}

const ModelOverlay = (props: any) => {
    return <div className="model position-fixed p-3 rounded-4 shadow-lg bg-light">
        <div className="content">{props.children}</div>
    </div>
}

const portalEl = document.getElementById('overlay')!;

function Model(props: any) {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop />, portalEl)}
            {ReactDOM.createPortal(<ModelOverlay>{props.children}</ModelOverlay>, portalEl)}
        </>
    )
}

export default Model
