import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';

import { useForm } from '../../hooks/useForm';
import { uiReducer } from '../../reducers/uiReducer';
import { removeError, setError } from '../../actions/ui';
import { startRegister } from '../../actions/auth';

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state);  // state 'screenshoot'
    const { msgError } = state.ui;

    const [formValues, handleInputChange] = useForm({
        name: 'Miguel',
        email: 'mi@gmail.com',
        password: '123456',
        password2: '123456',
    });

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        if (isFormCorrect()) {
            dispatch(startRegister(email,password,name));
        }

    }

    const isFormCorrect = () => {

        if (name.trim().length === 0) {
            dispatch(setError('name required'));
            return false;
        }

        if (!validator.isEmail(email)) {
            dispatch(setError('email is not valid'));
            return false;
        }

        if (password !== password2 || password.length < 5) {
            dispatch(setError('passwords should match, and should be more than 5 characters'));
            return false;
        }

        dispatch(removeError());
        return true;
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>
            <form onSubmit={handleRegister}>

                {
                    msgError &&
                    (
                        <div className="auth__alert-error">
                            {msgError}
                        </div>
                    )

                }


                <input
                    className="auth__input"
                    type="text"
                    placeholder="Name"
                    name="name"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
                <input
                    className="auth__input"
                    type="text"
                    placeholder="Email"
                    name="email"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />

                <input
                    className="auth__input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    autoComplete="off"
                    value={password}
                    onChange={handleInputChange}
                />
                <input
                    className="auth__input"
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    autoComplete="off"
                    value={password2}
                    onChange={handleInputChange}
                />
                <button
                    className="btn btn-primary btn-block mb-5"
                    type="submit">
                    Register
                </button>

                <Link
                    className="link"
                    to="/auth/login">
                    Alredy Registered?
                </Link>
            </form>

        </>
    )
}
