import { useForm } from '../../hooks/useForm';
import React, { useState } from 'react';
import './register.css'; 

function Register() {


    const initialValues = {
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
    };

    const formSubmitHanlder = (values) =>{
        console.log('Form Submited!');
        console.log(values);
    };

    const {values, changeHandler, submitHandler} = useForm(initialValues, formSubmitHanlder);

    return (
        <div className="register-container">
            <h1>Register</h1>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name={initialValues.email}
                        value={values.email}
                        onChange={changeHandler}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name={initialValues.username}
                        value={values.username}
                        onChange={changeHandler}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name={initialValues.password}
                        value={values.password}
                        onChange={changeHandler}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name={initialValues.confirmPassword}
                        value={values.confirmPassword}
                        onChange={changeHandler}
                        required
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
