import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import Button from '../../../shared/components/UI/Button';

import { ProjectFormDetails } from "../models/formValues";

function NewProjectForm() {

    const navigate = useNavigate();
    /**
     * @description intial values object for formik
     */
    const intitialValues: ProjectFormDetails = {
        projectName: '',
        description: ''
    };
    /**
     * @name onSubmit
     * @param values form value object after clicking on submit button
     */
    const onSubmit = (values: ProjectFormDetails) => {
        console.log(values);
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
            onSubmit={(values) => onSubmit(values)}
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
                <div className='text-end pt-4 pb-2'>
                    <Button type='submit' className='btn btn-danger text-light me-3' handleClick={onCancel}>Cancel</Button>
                    <Button type='submit' className='btn btn-secondary'>Submit</Button>
                </div>
            </Form>
        </Formik>
    )
};

export default NewProjectForm;
