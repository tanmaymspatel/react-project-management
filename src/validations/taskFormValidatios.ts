import * as Yup from 'yup';

export const taskValidationSchema = Yup.object({
    taskName: Yup.string().required('Task Name is required!'),
    status: Yup.string().required('Status is required!'),
    priority: Yup.string().required('Priority is required!'),
});