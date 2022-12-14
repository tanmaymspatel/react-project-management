function StatusCard({ phase, progress, status }: any) {
    return (
        <div className="col-3">
            <div className="p-3">
                <div className="text-center">
                    <h6 className="m-0">{phase}</h6>
                    <p className="m-0">
                        {progress === "100%" ? <span className="icon-completed text-success"></span> :
                            progress === "0%" ? <span className="icon-waiting text-warning"></span> :
                                <span>{progress}</span>}
                    </p>
                    <p className="m-0">{status}</p>
                </div>
            </div>
        </div>
    );
};

export default StatusCard;
