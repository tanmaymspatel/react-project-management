import { useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import Button from "../../shared/components/UI/Button";

import { ILoginDetails } from "../models/loginDetails.model";
import getEmployees from "../services/loginServices";
import { useNavigate } from 'react-router-dom';

/**
 * @name LoginForm
 * @returns A login form
 */
function LoginForm() {

    /**
     * To navigate programmatically in an application
     */
    const navigate = useNavigate();

    /**
     * List of existing users in the database
     */
    let existingUSers: ILoginDetails[];

    /**
     * initial values for the login form
     */
    const initialValues: ILoginDetails = {
        emailId: '',
        password: ''
    }

    /**
     * @name onSubmit
     * @param values Sumitted form values
     * @param param1 To reset the form after data submission
     */
    const onSubmit = (values: ILoginDetails, { resetForm }: any) => {
        existingUSers.map(user => {
            if (user.emailId === values.emailId && user.password === values.password) {
                console.log("matched!");
                localStorage.setItem('isLoggedin', "true")
                navigate('/projects')
            }
            else console.log("No match")
        },
            resetForm({ initialValues }));
    }

    /**
     * Validation criteria for the login form fields
     */
    const validationSchema = Yup.object({
        emailId: Yup.string().email('Invalid Email Format').required('Email id is Required!'),
        password: Yup.string().required('Password is Required!')
    })

    /**
     * @name getallUsers
     * @description To fetch all the existing user data from the database 
     */
    const getallUsers = async () => {
        const response = await getEmployees();
        existingUSers = await response.data;
    }

    /**
     * to get list of all the existing users after the component is loaded
     */
    useEffect(() => {
        getallUsers();
        /**
         * Claen up function
         */
        return () => { };
    }, [])

    return (
        <div className="h-100 d-flex flex-column justify-content-center p-4">
            <div className='w-75 mx-auto'>
                <h4>Welcome, Please Login!</h4>
                <Formik initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                    enableReinitialize
                >
                    <Form>
                        <div className="my-3">{/* email */}
                            <div className="d-flex align-items-center border border-2 px-2 border-radius">
                                <label htmlFor="emailId"><span className="icon-email text-secondary"></span> </label>
                                <Field type="email" className="form-control border-0" id="emailId" name='emailId' placeholder="Enter email Id" />
                            </div>
                            <ErrorMessage name='emailId'>
                                {errorMsg => <small className="text-danger">{errorMsg}</small>}
                            </ErrorMessage>
                        </div>
                        <div className="my-3">{/* password */}
                            <div className="d-flex align-items-center border border-2 px-2 border-radius">
                                <label htmlFor="password"><span className="icon-password text-secondary"></span></label>
                                <Field type="password" className="form-control border-0" id="password" name='password' placeholder="Enter your password" />
                            </div>
                            <ErrorMessage name='password'>
                                {errorMsg => <small className="text-danger">{errorMsg}</small>}
                            </ErrorMessage>
                        </div>
                        <div className="text-end">
                            <Button type='submit' className="btn btn-secondary">Submit</Button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default LoginForm;
