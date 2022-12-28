interface IProjectDetailCards {
    projectDetail: string,
    iconColor: string,
    icon: string,
    borderBottom: boolean,
    title: string
}

/**
 * @returns a card component which is used in project details component  
 */
function ProjectDetailsCard({ projectDetail, iconColor, icon, borderBottom, title }: IProjectDetailCards) {

    return (
        <div className={`${borderBottom ? "border-bottom border-info" : null} d-flex justify-content-around py-4 px-2`}>
            <span className={`${iconColor} ${icon} dashboard-icon d-flex align-items-center text-secondary`}></span>
            <div className="py-1">
                <p className="fw-bold m-0 py-2">{title} <span>:</span></p>
                <p>{projectDetail}</p>
            </div>
        </div>
    );
};

export default ProjectDetailsCard;
