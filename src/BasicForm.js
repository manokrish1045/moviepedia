import * as React from 'react';
import { useFormik } from 'formik';
import * as yup from "yup";


const formValidationschema = yup.object({
    email: yup
        .string()
        .min(8, "Need a Bigger Email"),

    password: yup
        .string()
        .min(8, "Need a Bigger Password")
        .required("Its A Required field")
        .max(12),
})
export function BasicForm() {
    const { handleSubmit, values, handleChange, handleBlur, touched, errors } = useFormik({
        initialValues: {
            email: "",
            password: ''
        },
        validationSchema: formValidationschema,
        onSubmit: (values) => {
            console.log('the form are ', values)
        },
    })

    return (

        <div >
            <form className='basic-form'
                onSubmit={handleSubmit}>
                <input
                    name='email'
                    type='email'
                    placeholder='Email'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                ></input>
                {touched.email && errors.email ? errors.email : null}
                <input
                    name='password'
                    type='password'
                    placeholder='Password'
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                ></input>
                {touched.password && errors.password ? errors.password : null}

                <button type='submit'> submit</button>
            </form>

        </div>
    );
}
