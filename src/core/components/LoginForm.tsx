import { useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import Button from "../../shared/components/UI/Button";

import { ILoginDetails } from "../models/loginDetails.model";
import getEmployees from "../services/loginServices";

function LoginForm() {

    const initialValues: ILoginDetails = {
        emailId: '',
        password: ''
    }

    const onsubmit = (values: ILoginDetails) => {
        console.log(values);

    }

    const validationSchema = Yup.object({
        emailId: Yup.string().email('Invalid Email Format').required('Email id is Required!'),
        password: Yup.string().required('Password is Required!')
    })

    const getallUsers = async () => {
        const response = await getEmployees();
        const data = await response.data;
        console.log(data);

    }

    useEffect(() => {
        getallUsers();
    }, [])

    return (
        <div className="h-100 d-flex flex-column justify-content-center p-4">
            <div className='w-75 mx-auto'>
                <h4>Welcome, Please Login!</h4>
                <Formik initialValues={initialValues}
                    onSubmit={onsubmit}
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
                                <Field type="email" className="form-control border-0" id="password" name='password' placeholder="Enter email Id" />
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
