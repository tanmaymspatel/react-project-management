/**
 * @name Loader
 * @returns Loader component used when the component is loading
 */
function Loader() {

    return (
        <>
            <div className="d-flex align-items-center justify-content-center position-fixed start-0 top-0 w-100 h-100 bg-dark bg-opacity-25 overflow-auto">
                <div className="spinner-border text-secondary" role="status">
                </div>
            </div>
        </>
    )
}

export default Loader;