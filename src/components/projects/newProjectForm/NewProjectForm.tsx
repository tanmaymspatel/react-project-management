import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';

import coreServices from '../../../core/services/coreServices';
import projectServices from '../../../services/projectServices';
import Button from '../../../shared/components/UI/Button';
import { ProjectFormDetails } from "../models/formValues";

/**
 * @returns a form to add new project
 */
function NewProjectForm(props: any) {
    /**
     * @name maxProjectId
     * @returns highest number of project id from the projects array
     */
    const maxProjectId = async () => {
        const allProjects = await getAllProjects();
        const newAllProjects = allProjects.data;
        return Math.max(...newAllProjects.map((res: any) => res.id))
    }
    /**
     * @description To navigate to routes
     */
    const navigate = useNavigate();
    /**
     * @description email id of the logged in user
     */
    const email: any = localStorage.getItem('email');
    /**
     * @description state for the logged in user
     */
    let [loggedUser, setLoggedUser] = useState<any>([]);
    /**
     * @description id of the selected project
     */
    const { id } = useParams();
    const { getCurrentUSer } = coreServices;
    const { addNewProject, editedUser, getAllProjects, getProjectDetailsById, updateProject } = projectServices;

    /**
     * @name getCurrentUserObject
     * @description To get the details of currently logged in user in form of object
     */
    const getCurrentUserObject = async () => {
        getCurrentUSer(email)
            .then(res => {
                setLoggedUser(res.data[0])
            });
    };
    /**
     * @description To call the loogedin user data
     * @description To patch value in the form, when edit button is clicked on the perticular project
     */
    useEffect(() => {
        getCurrentUserObject();
        if (id) {
            props.setTitle('Edit');
            getProjectDetailsById(id)
                .then(res => {
                    setPatchValue(res.data)
                })
        }
    }, [id]);
    /**
     * @description intial values object for formik
     */
    const intitialValues: ProjectFormDetails = {
        projectName: '',
        description: '',
        duration: '',
        cost: ''
    };
    /**
     * @description State for the values associated with the form
     */
    const [patchValue, setPatchValue] = useState(intitialValues)
    /**
     * @name onSubmit
     * @param values form value object after clicking on submit button
     */
    const onSubmit = async (values: ProjectFormDetails, resetForm: any) => {
        try {
            getCurrentUserObject();
            resetForm({ values: '' });
            const maxId = await maxProjectId();
            if (id) await updateProject(id, values);
            if (!id) {
                /**
                 * Adding new project and editing the loggedin user according to changes in project id
                 */
                await addNewProject(values);
                let projectId = loggedUser.projectId;
                projectId = [...projectId, maxId + 1];
                loggedUser = { ...loggedUser, projectId };
                await editedUser(loggedUser.id, loggedUser);
            }
            navigate('../');
            // window.location.reload();
        }
        catch (err) {
            console.log(err);
        }
    };
    /**
     * @name validationSchema
     * @description validation criteria for the form fields
     */
    const validationSchema = Yup.object({
        projectName: Yup.string().required('Project Name is required!'),
        description: Yup.string().required('Project Description is required!'),
    });
    /**
     * @name onCancel
     * @description navigate to the previous page
     */
    const onCancel = () => {
        navigate(-1);
    };

    return (
        <Formik
            initialValues={patchValue}
            onSubmit={(values, { resetForm }) => onSubmit(values, resetForm)}
            validationSchema={validationSchema}
            enableReinitialize
        >
            <Form>
                <div className="my-3"> {/* project name */}
                    <label className='mb-1' htmlFor="projectName">Project Name : </label>
                    <Field type="text" className="form-control" id="projectName" name='projectName' placeholder="Project 1001" />
                    <ErrorMessage name='projectName' >
                        {errorMsg => <small className="text-danger">{errorMsg}</small>}
                    </ ErrorMessage>
                </div>
                <div className="my-3"> {/* first name */}
                    <label className='mb-1' htmlFor="description">Project Details : </label>
                    <Field as="textarea" className="form-control" id="description" name='description' placeholder="Enter Project details" rows='5' />
                    <ErrorMessage name='description' >
                        {errorMsg => <small className="text-danger">{errorMsg}</small>}
                    </ ErrorMessage>
                </div>
                <div className='row g-3'>
                    <div className="col-md-6 my-3"> {/* project duration */}
                        <label className='mb-1' htmlFor="duration">Project Duration : </label>
                        <Field type="text" className="form-control" id="duration" name='duration' placeholder="18 Months" />
                        <ErrorMessage name='duration' >
                            {errorMsg => <small className="text-danger">{errorMsg}</small>}
                        </ ErrorMessage>
                    </div>
                    <div className="col-md-6 my-3"> {/* project cost */}
                        <label className='mb-1' htmlFor="cost">Project Cost : </label>
                        <Field type="text" className="form-control" id="cost" name='cost' placeholder="12 Lakhs" />
                        <ErrorMessage name='cost' >
                            {errorMsg => <small className="text-danger">{errorMsg}</small>}
                        </ ErrorMessage>
                    </div>
                </div>
                <div className='text-end pt-4 pb-2'>
                    <Button type='submit' className='btn btn-danger text-light me-3' handleClick={onCancel}>Cancel</Button>
                    <Button type='submit' className='btn btn-secondary'>Submit</Button>
                </div>
            </Form>
        </Formik>
    )
};

export default NewProjectForm;
