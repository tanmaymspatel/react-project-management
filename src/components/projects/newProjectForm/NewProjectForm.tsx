import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import UserContext from '../../../contexts/user-context/userContext';
import coreServices from '../../../core/services/coreServices';

import projectServices from '../../../services/projectServices';
import Button from '../../../shared/components/UI/Button';
import { ProjectFormDetails } from "../models/formValues";

function NewProjectForm() {

    const navigate = useNavigate();
    const { email } = useContext(UserContext);
    let user: any;

    const { getCurrentUSer } = coreServices;

    const getCurrentUSerObject = async () => {
        let data = await getCurrentUSer(email);
        user = data.data[0];
        // console.log(user);
    }

    // console.log(Math.max(...projectId));

    const { addNewProject, editedProject, getAllProjects } = projectServices;
    /**
     * @description intial values object for formik
     */
    const intitialValues: ProjectFormDetails = {
        projectName: '',
        description: '',
        duration: '',
        cost: ''
    };

    const maxProjectId = async () => {
        const allProjects = await getAllProjects();
        const newAllProjects = allProjects.data;
        return Math.max(...newAllProjects.map((res: any) => res.id))
    }
    /**
     * @name onSubmit
     * @param values form value object after clicking on submit button
     */
    const onSubmit = async (values: ProjectFormDetails, resetForm: any) => {
        try {
            // getCurrentUSerObject();
            resetForm({ values: '' });
            navigate('../');
            let maxId: any;
            maxId = await maxProjectId();
            let projectId = user.projectId;
            projectId = [...projectId, maxId + 1];
            user = { ...user, projectId }
            // addNewProject({ ...values, duration: '', cost: '' }).then(() => editedProject(user.id, user));

            // window.location.reload();
        }
        catch (err) {
            console.log(err);
        }
    }
    /**
     * @name validationSchema
     * @description validation criteria for the form fields
     */
    const validationSchema = Yup.object({
        projectName: Yup.string().required('Project Name is required!'),
        description: Yup.string().required('Project Description is required!'),
    })

    const onCancel = () => {
        navigate(-1);
    }

    return (
        <Formik
            initialValues={intitialValues}
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
