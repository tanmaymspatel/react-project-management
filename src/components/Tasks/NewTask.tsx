import { useContext, useEffect, useState } from "react"
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import Model from "../../shared/components/UI/Model";
import { TaskDetails } from "../projects/models/formValues";
import Button from "../../shared/components/UI/Button";
import projectServices from "../../services/projectServices";
import { useParams } from "react-router-dom";
import TaskContext from "../../contexts/user-context/taskContext";

function NewTask({ modifyProjectDetails, closeOverlay, }: any) {

    const [formTitle, setFormTitle] = useState('Add');
    const [statusList, setStatusList] = useState<any>([]);
    const [priorityList, setPriorityList] = useState<any>([]);
    const { id } = useParams();
    const { getStatus, getPriority } = projectServices;

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

    }, []);

    const statusDropDownOptions = statusList.map((item: any) => <option key={item.id} value={item.name}>{item.name}</option>
    );
    // const priorityDropDownOptions = priorityList.map((item: any) => <option key={item.id} value={item.name}>{item.name}</option>
    // );

    /**
     * @description intial values object for formik
     */
    const intitialValues: TaskDetails = {
        taskName: '',
        status: '',
        priority: '',
        completedSubTasks: [],
        totalSubTasks: []
    };

    const [patchValue, setPatchValue] = useState(intitialValues);
    /**
     * @name validationSchema
     * @description validation criteria for the form fields
     */
    const validationSchema = Yup.object({
        taskName: Yup.string().required('Task Name is required!'),
        status: Yup.string().required('Status is required!'),
        priority: Yup.string().required('Priority is required!'),
    });
    /**
     * @name onSubmit
     * @param values form value object after clicking on submit button
     */
    const onSubmit = (values: TaskDetails, resetForm: any) => {
        modifyProjectDetails(values);
        resetForm({ values: '' });
        closeOverlay();
        setIsEdit(false);
    }

    return (
        <Model closeOverlay={closeOverlay}>
            <div className="py-3 px-4">
                <h4 className="text-center">{formTitle} Task</h4>
                {/* Task form */}
                <Formik
                    initialValues={patchValue}
                    onSubmit={(values, { resetForm }) => onSubmit(values, resetForm)}
                    validationSchema={validationSchema}
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
                                    {/* <option value="todo">Todo</option>
                                    <option value="active">Active</option>
                                    <option value="completed">Completed</option> */}
                                </Field>
                                <ErrorMessage name='status'>
                                    {errorMsg => <small className="text-danger">{errorMsg}</small>}
                                </ ErrorMessage>
                            </div>
                            <div className="col-md-6 my-3"> {/* priority */}
                                <label className='mb-1' htmlFor="priority">Priority : </label>
                                <Field className="form-select" as="select" name="priority">
                                    {/* {priorityDropDownOptions} */}
                                    <option value="select Priority">Select Priority</option>
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
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
