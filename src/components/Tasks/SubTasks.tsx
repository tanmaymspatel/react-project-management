import { useContext, useState } from "react";
import * as Yup from 'yup';
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';

import TaskContext from "../../contexts/user-context/taskContext";
import Button from "../../shared/components/UI/Button";
import Model from "../../shared/components/UI/Model";
import { SubTaskDetails } from "../projects/models/formValues";

function SubTasks() {

    const { closeOverlay } = useContext(TaskContext)
    /**
    * @description intial values object for formik
    */
    const intitialValues = {
        subTasks: [{
            subTaskName: '',
            isCompleted: false
        },
        ],
    };
    const [patchValue, setPatchValue] = useState(intitialValues);
    /**
     * @name validationSchema
     * @description validation criteria for the form fields
     */
    const validationSchema = Yup.object().shape({
        subTasks: Yup.array()
            .of(
                Yup.object().shape({
                    subTaskName: Yup.string()
                        .ensure()
                        .required("SubTask is required")
                }))
            .required()
    });
    /**
     * @name onSubmit
     * @param values form value object after clicking on submit button
     */
    const onSubmit = (values: any, resetForm: any) => {
        debugger
        console.log(values);
        resetForm({ values: '' });
        closeOverlay();
    };

    return (
        <Model>
            <div className="px-2 py-3">
                <div className="text-end">
                    <Button type="button" className="btn btn-danger text-light" handleClick={closeOverlay}>X</Button>
                </div>
                <Formik
                    initialValues={patchValue}
                    onSubmit={(values, { resetForm }) => onSubmit(values, resetForm)}
                    validationSchema={validationSchema}
                    enableReinitialize
                >
                    <Form>
                        <div className="my-3">
                            <FieldArray name="subTasks">
                                {
                                    (fieldArrayProps) => {
                                        const { push, remove, form } = fieldArrayProps;
                                        const { values } = form;
                                        const { subTasks } = values;
                                        return (
                                            <div>
                                                <label className='mb-1' htmlFor="subTasks">Subtasks </label>
                                                {
                                                    subTasks.map((subTask: any, index: number) => {
                                                        return (
                                                            <div key={index} className=' my-2'>
                                                                <div className="d-flex ">
                                                                    <div className="align-self-center me-2">
                                                                        <Field className="mt-0" type="checkbox" id={`subTask-${index + 1}`} name={`subTasks.${index}.isCompleted`} value='isCompleted' />
                                                                    </div>
                                                                    <Field type='text' name={`subTasks.${index}.subTaskName`} placeholder="sub task name" className='form-control w-75' />
                                                                    <div>
                                                                        <Button type="button" className="btn btn-secondary ms-1" handleClick={() => push('')}>+</Button>
                                                                        {index > 0 ? <Button type="button" className="btn btn-danger text-light ms-2" handleClick={() => remove(index)}>-</Button> : null}
                                                                    </div>
                                                                </div>
                                                                <ErrorMessage name={`subTasks.${index}.subTaskName`} >
                                                                    {errorMsg => <small className="text-danger">{errorMsg}</small>}
                                                                </ ErrorMessage>

                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    }
                                }
                            </FieldArray>
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

export default SubTasks;
