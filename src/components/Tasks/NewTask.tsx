import { useContext, useEffect, useState } from "react"
import { ErrorMessage, Field, Form, Formik } from 'formik';

import Model from "../../shared/components/UI/Model";
import { TaskDetails } from "../projects/models/formValues";
import Button from "../../shared/components/UI/Button";
import projectServices from "../../services/projectServices";
import TaskContext from "../../contexts/user-context/taskContext";
import { taskValidationSchema } from "../../validations/taskFormValidatios";

function NewTask() {

    const [formTitle, setFormTitle] = useState('Add');
    const [statusList, setStatusList] = useState<any>([]);
    const [priorityList, setPriorityList] = useState<any>([]);
    const { getStatus, getPriority } = projectServices;
    const { modifyProjectDetails, closeOverlay } = useContext(TaskContext)

    useEffect(() => {
        getStatus().then(res => setStatusList(res.data))
        getPriority().then(res => setPriorityList(res.data))
    }, [getPriority, getStatus]);

    const { taskTobeEdited, isEdit, setIsEdit } = useContext(TaskContext)

    useEffect(() => {
        if (isEdit) {
            setFormTitle("Edit");
            setPatchValue(taskTobeEdited);
        }
    }, [isEdit, taskTobeEdited]);

    const statusDropDownOptions = statusList.map((item: any) => <option key={item.id} value={item.name}>{item.name}</option>);
    const priorityDropDownOptions = priorityList.map((item: any) => <option key={item.id} value={item.name}>{item.name}</option>);

    /**
     * @description intial values object for formik
     */
    const intitialValues: TaskDetails = {
        taskName: '',
        status: '',
        priority: '',
        subTasks: []
    };

    const [patchValue, setPatchValue] = useState(intitialValues);
    /**
     * @name onSubmit
     * @param values form value object after clicking on submit button
     */
    const onSubmit = (values: TaskDetails, resetForm: any) => {
        modifyProjectDetails(values);
        resetForm({ values: '' });
        closeOverlay();
        setIsEdit(false);
    };

    return (
        <Model>
            <div className="py-3 px-4">
                <h4 className="text-center">{formTitle} Task</h4>
                {/* Task form */}
                <Formik
                    initialValues={patchValue}
                    onSubmit={(values, { resetForm }) => onSubmit(values, resetForm)}
                    validationSchema={taskValidationSchema}
                    enableReinitialize
                >
                    <Form>
                        <div className="my-3"> {/* Task name */}
                            <label className='mb-1' htmlFor="taskName">Task Name : </label>
                            <Field type="text" className="form-control" id="taskName" name='taskName' placeholder="Listing of data" />
                            <ErrorMessage name='taskName' >
                                {errorMsg => <small className="text-danger">{errorMsg}</small>}
                            </ ErrorMessage>
                        </div>
                        <div className='row g-3'>
                            <div className="col-md-6 my-3"> {/* status */}
                                <label className='mb-1' htmlFor="status">Status : </label>
                                <Field className="form-select" as="select" name="status">
                                    <option value="select Status">Select Status</option>
                                    {statusDropDownOptions}
                                </Field>
                                <ErrorMessage name='status'>
                                    {errorMsg => <small className="text-danger">{errorMsg}</small>}
                                </ ErrorMessage>
                            </div>
                            <div className="col-md-6 my-3"> {/* priority */}
                                <label className='mb-1' htmlFor="priority">Priority : </label>
                                <Field className="form-select" as="select" name="priority">
                                    <option value="select Priority">Select Priority</option>
                                    {priorityDropDownOptions}
                                </Field>
                                <ErrorMessage name='priority' >
                                    {errorMsg => <small className="text-danger">{errorMsg}</small>}
                                </ ErrorMessage>
                            </div>
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

export default NewTask;
