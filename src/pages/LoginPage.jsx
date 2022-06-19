import React from 'react';
import {Link} from 'react-router-dom';

import FormInput from './../components/forms/FormInput'
import Button from './../components/buttons/Button';
import './../styles/styles.scss'
// This is the login page for the stock tracker app, it will verify with the database whether the user has a registered account in our database and if they have entered their username or password correctly. If it does not work each error message will show what needs to be changed but when users log in correctly they will be redirected to the dashboard
// Todos: use firebase to store log in data?(maybe)
// set a handle click method on the button to authenticate the username and password
// set a boolean that if the log in information is valid redirect to the home page
// google bcrypt for password security when logging into the page

const LoginPage = () => {
    return (
        <header>
            <h1>Welcome to the Stock Tracker Application</h1>
            <p>Please Login</p>
            {/* still will need to add onChange methods to the FormInputs */}
            <FormInput label="Email Address: " type="text"/>
            <FormInput label="Password: " type="text"/>
            <Button  label="login"/>
            <p>Don't have an account? Click <Link className='homeLinks' to='/register'>here</Link> to sign up!</p>
        </header>
    );
};

export default LoginPage;

