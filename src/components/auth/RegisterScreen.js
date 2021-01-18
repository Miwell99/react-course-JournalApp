import React from 'react';
import { Link } from 'react-router-dom';
import  validator from 'validator'

import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {

    const [formValues, handleInputChange] = useForm({
        name: 'Miguel',
        email: 'mi@gmail.com',
        password: '12345',
        password2: '12345',
    });

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        if(isFormCorrect()){
            console.log('correct')
        }

    }

    const isFormCorrect = () =>{

        if ( name.trim().length ===0 ){
            console.log('name required')
            return false;
        }

        if( !validator.isEmail(email)){
            console.log('email is not valid');
            return false;
        }

        if(  password !== password2 || password.length<5){
            console.log('passwords should match, and should be more than 5 characters');
            return false;
        }

        return true;
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>
            <form onSubmit={handleRegister}>

                <div className="auth__alert-error">
                    Error! Check the fields
                </div>

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
                    Alredy Registerted?
                </Link>
            </form>

        </>
    )
}
