/**
 * @returns a progress bar of asked percentage value and color 
 */

interface IProgressBarProps {
    progress: string,
    bgColor: string
}

function ProgressBar({ progress, bgColor }: IProgressBarProps) {
    return (
        <div className="bg-light rounded-4">
            <div className={`bg-${bgColor} h-100 bg-secondary rounded-4 text-end`} style={{ width: `${progress}%` }}>
                <span className="p-3 text-light fw-bolder">{`${progress}`}%</span>
            </div>
        </div>
    )
}

export default ProgressBar;
