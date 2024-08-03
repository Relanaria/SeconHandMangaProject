import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';
import { useRegister } from '../../hooks/useAuth';

import './register.css'; 

function Register() {
    const navigate = useNavigate();
    const initialValues = {
        email: '',
        password: '',
        username: '',
        confirmPassword: ''
    };

    const register = useRegister();

    const {values, changeHandler, submitHandler} = useForm(initialValues,async (userData) => {
        try {
           await register(userData);
            navigate('/');
        } catch (error) {
           alert(error.message)
        }
    });

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
