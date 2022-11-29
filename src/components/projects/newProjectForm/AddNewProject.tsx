import { useState } from "react";

import NewProjectForm from "./NewProjectForm";

function AddNewProject() {
    const [title, setTitle] = useState('Add');
    return (
        <div className="w-50 mx-auto">
            <div className='px-5 py-4 my-5 shadow-lg border-radius'>
                <h3 className="text-center py-3">{`${title} Project`}</h3>
                <NewProjectForm />
            </div>
        </div>
    );
};

export default AddNewProject;
