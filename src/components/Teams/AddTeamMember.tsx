import { useContext, useEffect, useState } from "react"
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import TeamContext from "../../contexts/user-context/teamContext";
import Button from "../../shared/components/UI/Button";
import Model from "../../shared/components/UI/Model";
import { TeamMemberDetails } from "../projects/models/formValues";

function AddTeamMember({ modifyTeamDetails }: any) {

    const [formTitle, setFormTitle] = useState('Add');
    const { closeOverlay, teamMemberTobeEdited, isEdit } = useContext(TeamContext);

    /**
     * @description intial values object for formik
     */
    const intitialValues: TeamMemberDetails = {
        name: '',
        profilePicture: 'https://www.svgrepo.com/show/105032/avatar.svg',
        emailId: '',
        status: '',
        designation: ''
    };
    const [patchValue, setPatchValue] = useState(intitialValues);
    /**
     * @name validationSchema
     * @description validation criteria for the form fields
     */
    const validationSchema = Yup.object({
        name: Yup.string().required('Member Name is required!'),
        emailId: Yup.string().required('Member Name is required!').email('Please enter a vallid email id!'),
        status: Yup.string().required('Status is required!'),
        designation: Yup.string().required('designation is required!')
    });

    /**
     * @name onSubmit
     * @param values form value object after clicking on submit button
     */
    const onSubmit = (values: TeamMemberDetails, resetForm: any) => {
        modifyTeamDetails(values);
        resetForm({ values: '' });
        closeOverlay();
    };

    useEffect(() => {
        if (isEdit) {
            setFormTitle('Edit')
            setPatchValue(teamMemberTobeEdited);
        }
    }, [teamMemberTobeEdited, isEdit])

    return (
        <Model>
            <div className="py-3 px-4">
                <h4 className="text-center py-3">{formTitle} <span>Team Member</span></h4>
                <Formik
                    initialValues={patchValue}
                    onSubmit={(values, { resetForm }) => onSubmit(values, resetForm)}
                    validationSchema={validationSchema}
                    enableReinitialize
                >
                    <Form>
                        <div className="my-3"> {/* Task name */}
                            <label className='mb-1' htmlFor="name">Team Member name : </label>
                            <Field type="text" className="form-control" id="name" name='name' placeholder="John Doe" />
                            <ErrorMessage name='name' >
                                {errorMsg => <small className="text-danger">{errorMsg}</small>}
                            </ ErrorMessage>
                        </div>
                        <div className="my-3"> {/* Task name */}
                            <label className='mb-1' htmlFor="emailId">Team Member Email id : </label>
                            <Field type="email" className="form-control" id="emailId" name='emailId' placeholder="john.doe@abc.com" />
                            <ErrorMessage name='emailId' >
                                {errorMsg => <small className="text-danger">{errorMsg}</small>}
                            </ ErrorMessage>
                        </div>

                        <div className="my-3"> {/* status */}
                            <label className='mb-1' htmlFor="status">Status : </label>
                            <Field className="form-select" as="select" name="status">
                                <option value="select Status">Select Status</option>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </Field>
                            <ErrorMessage name='status'>
                                {errorMsg => <small className="text-danger">{errorMsg}</small>}
                            </ ErrorMessage>
                        </div>
                        <div className="my-3"> {/* designation */}
                            <label className='mb-1' htmlFor="designation">Designation : </label>
                            <Field className="form-select" as="select" name="designation">
                                <option value="select Status">Select Designation</option>
                                <option value="Planning">Planning</option>
                                <option value="Web designer">Web Designer</option>
                                <option value="Front-end Developer">Front-end Developer</option>
                                <option value="Back-end Developer">Back-end Developer</option>
                                <option value="Tester">Tester</option>
                            </Field>
                            <ErrorMessage name='designation' >
                                {errorMsg => <small className="text-danger">{errorMsg}</small>}
                            </ ErrorMessage>
                        </div>
                        <div className='text-end pt-4 pb-2'>
                            <Button type='button' className='btn btn-danger text-light me-3' handleClick={closeOverlay}>Cancel</Button>
                            <Button type='submit' className='btn btn-secondary'>Submit</Button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </Model>
    );
};

export default AddTeamMember;
