import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import './login.css';

function Login() {
    const initialValues = {
        email: '',
        password: '',
    };

    const formSubmitHanlder = (values) =>{
        console.log('Form Submited!');
        console.log(values);
    }

    const {values, changeHandler, submitHandler} = useForm(initialValues, formSubmitHanlder)

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        placeholder='email'
                        type="email"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={changeHandler}
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
                        value={values.password}
                        onChange={changeHandler}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
