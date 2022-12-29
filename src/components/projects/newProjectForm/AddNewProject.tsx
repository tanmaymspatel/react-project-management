import { useState } from "react";

import NewProjectForm from "./NewProjectForm";

function AddNewProject() {
    const [title, setTitle] = useState('Add');

    const setTitleHandler = (title: string) => {
        setTitle(title);
    }
    return (
        <div className="w-sm-75 mx-auto">
            <div className='px-5 py-4 my-5 shadow-lg border-radius'>
                <h3 className="text-center py-3">{`${title} Project`}</h3>
                <NewProjectForm setTitle={setTitleHandler} />
            </div>
        </div>
    );
};

export default AddNewProject;
