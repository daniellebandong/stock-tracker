import React from 'react';
import { Link } from 'react-router-dom';

import RegisterFormType from './../components/forms/RegisterFormType';
import Button from './../components/buttons/Button'

// Todos: use firebase to store log in data?(maybe)
// set a handle click method on the button to authenticate its a good username and password and meets requirements for an account
// set a boolean that if the registered information is valid and good redirect to the log in page
// google bcrypt for password security when logging into the page
// need {useContext, useState } on my React import later

const Register = (props) => {
    return (
        <div className='mx-2'>
            <h2>Sign Up to start investing today!</h2>
            <RegisterFormType/>
            <p>Already have an account? Click <Link className='font-medium text-blue-600 dark:text-blue-500 hover:underline' to='/login'>here</Link> to sign in!</p>
        </div>
    );
};

export default Register;