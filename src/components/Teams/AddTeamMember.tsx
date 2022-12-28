import { useContext, useState } from "react"
import { ErrorMessage, Field, Form, Formik } from 'formik';

import TeamContext from "../../contexts/teamContext/teamContext";
import Button from "../../shared/components/UI/Button";
import Model from "../../shared/components/UI/Model";
import { teamValidationSchema } from "../../validations/teamFormValidations";
import { IMemberDetails } from "./model/teamDetails";

interface AddTeamMemberProps {
    modifyTeamDetails: (values: IMemberDetails) => void
}

function AddTeamMember({ modifyTeamDetails }: AddTeamMemberProps) {
    /**
     * @description state for title of the form
     */
    const [formTitle, setFormTitle] = useState('Add');
    const { closeOverlay } = useContext(TeamContext);
    /**
     * @description intial values object for formik
     */
    const intitialValues: IMemberDetails = {
        name: '',
        profilePicture: 'https://www.svgrepo.com/show/105032/avatar.svg',
        emailId: '',
        status: '',
        designation: ''
    };
    const [patchValue, setPatchValue] = useState<IMemberDetails>(intitialValues);
    /**
     * @name onSubmit
     * @param values form value object after clicking on submit button
     */
    const onSubmit = (values: IMemberDetails, resetForm: any) => {
        modifyTeamDetails(values);
        resetForm({ values: '' });
        closeOverlay();
    };

    return (
        <Model>
            <div className="py-3 px-4">
                <h4 className="text-center py-3">{formTitle} <span>Team Member</span></h4>
                <Formik
                    initialValues={patchValue}
                    onSubmit={(values, { resetForm }) => onSubmit(values, resetForm)}
                    validationSchema={teamValidationSchema}
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
