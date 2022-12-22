import CircularProgressBar from "../../shared/components/UI/CircularProgressBar";

/**
 * @returns individual status card having respective project phase 
 */
function StatusCard({ phase, progress, status }: any) {
    return (
        <div className="col-3">
            <div className="p-3">
                <div className="text-center">
                    <h6 className="m-0">{phase}</h6>
                    <div className="m-0">
                        {progress === 100 ? <span className="icon-completed text-success"></span> :
                            progress === 0 ? <span className="icon-waiting text-warning"></span> :
                                <CircularProgressBar percent={progress} />
                        }
                    </div>
                    <p className="m-0">{status}</p>
                </div>
            </div>
        </div>
    );
};

export default StatusCard;
