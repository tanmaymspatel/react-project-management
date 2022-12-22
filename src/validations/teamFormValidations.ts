import * as Yup from 'yup';

export const teamValidationSchema = Yup.object({
    name: Yup.string().required('Member Name is required!'),
    emailId: Yup.string().required('Member Name is required!').email('Please enter a vallid email id!'),
    status: Yup.string().required('Status is required!'),
    designation: Yup.string().required('designation is required!')
});