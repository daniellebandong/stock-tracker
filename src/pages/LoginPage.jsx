import { React, useState } from 'react';
import { Link } from 'react-router-dom';

import LoginFormType from './../components/forms/LoginFormType'
import Button from './../components/buttons/Button';

// This is the login page for the stock tracker app, it will verify with the database whether the user has a registered account in our database and if they have entered their username or password correctly. If it does not work each error message will show what needs to be changed but when users log in correctly they will be redirected to the dashboard
// Todos: use firebase to store log in data?(maybe)
// set a handle click method on the button to authenticate the username and password
// set a boolean that if the log in information is valid redirect to the home page
// google bcrypt for password security when logging into the page

const LoginPage = (props) => {
    //part of the verification process
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    //const [isValid, setIsValid] = useState(false)

    //handle click method

    return (
        <div className='mx-2 justify-content: center'>
            <h1 className='text-xl font-bold'>Welcome to the Stock Tracker Application</h1>
            <LoginFormType/>
            <p>Don't have an account? Click <Link className='font-medium text-blue-600 dark:text-blue-500 hover:underline' to='/register'>here</Link> to sign up!</p>
        </div>
    );
};

export default LoginPage;

