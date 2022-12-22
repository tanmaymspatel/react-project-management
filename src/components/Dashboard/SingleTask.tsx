/**
 * @returns a single task to be rendered in the task list tasble 
 */
function SingleTask(props: any) {

    const { status, taskName, priority } = props;

    return (
        <tr>
            <td>{status}</td>
            <td>{taskName}</td>
            <td>
                <p className="mb-0">
                    <span className={`${priority === 'low' ? "bg-success" :
                        priority === 'medium' ? "bg-secondary" :
                            priority === 'high' ? "bg-danger" : null} px-3 py-1 rounded-circle`}>
                    </span>
                </p>
            </td>
        </tr>
    );
};

export default SingleTask;

