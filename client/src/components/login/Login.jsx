import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { useNavigate } from 'react-router-dom';

import './login.css';

import { useLogin } from '../../hooks/useAuth';

export default function Login() {
    const navigate = useNavigate();
    const initialValues = {
        email: '',
        password: '',
    };

    const login = useLogin();

    const {values, changeHandler, submitHandler} = useForm(initialValues,async ({email, password}) => {
        try {
            
          await login(email, password);

            navigate('/');
        } catch (error) {
            alert(error.message)
        }
    })

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


