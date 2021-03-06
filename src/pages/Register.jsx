import React from 'react';
//import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';

import FormInput from './../components/forms/FormInput';
import Button from './../components/buttons/Button'

// Todos: use firebase to store log in data?(maybe)
// set a handle click method on the button to authenticate its a good username and password and meets requirements for an account
// set a boolean that if the registered information is valid and good redirect to the log in page
// google bcrypt for password security when logging into the page
// need {useContext, useState } on my React import later

const Register = (props) => {
    return (
    <header>
        <h2>Sign Up to start investing today!</h2>
        <p>no credit card required</p>
        <FormInput label="name on the account: " type="text" />
        <FormInput label="valid email address: " type="email" />
        <FormInput label="password(min 6 characters): " type="text" />
        <Button label="Register"/>
        <p>Already have an account? Click <Link className='homeLinks' to='/login'>here</Link> to sign in!</p>
    </header>
    );
};

export default Register;