import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';
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
                        placeholder='email'
                        type="email"
                        id="email"
                        name="email"
                        onChange={changeHandler}
                        vlaue={values.email}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        placeholder='username'
                        type="text"
                        id="username"
                        name="username"
                        onChange={changeHandler}
                        vlaue={values.username}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        placeholder='password'
                        type="password"
                        id="password"
                        name="password"
                        onChange={changeHandler}
                        vlaue={values.password}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        placeholder='confirmPassword'
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        onChange={changeHandler}
                        vlaue={values.confirmPassword}
                        required
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
