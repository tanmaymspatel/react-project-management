import * as ReactDOM from 'react-dom';


const Backdrop = (props: any) => {
    return <div className="backdrop position-fixed top-0 start-0 w-100 vh-100 bg-dark bg-opacity-25"
        onClick={props.closeOverlay} >
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
            {ReactDOM.createPortal(<Backdrop closeOverlay={props.closeOverlay} />, portalEl)}
            {ReactDOM.createPortal(<ModelOverlay>{props.children}</ModelOverlay>, portalEl)}
        </>
    )
}

export default Model
