import {React, useState} from 'react';
import {Link} from 'react-router-dom';

import FormInput from './../components/forms/FormInput'
import Button from './../components/buttons/Button';
import './../styles/styles.scss'
// This is the login page for the stock tracker app, it will verify with the database whether the user has a registered account in our database and if they have entered their username or password correctly. If it does not work each error message will show what needs to be changed but when users log in correctly they will be redirected to the dashboard
// Todos: use firebase to store log in data?(maybe)
// set a handle click method on the button to authenticate the username and password
// set a boolean that if the log in information is valid redirect to the home page
// google bcrypt for password security when logging into the page

const LoginPage = (props) => {
    //part of the verification process
    const[email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    //const [isValid, setIsValid] = useState(false)

    //handle click method
    
    return (
        <header>
            <h1>Welcome to the Stock Tracker Application</h1>         
            {/* still will need to add onChange methods to the FormInputs */}
            <form action="">
                <p>Please Login</p>
                <FormInput label="Email Address: " type="text" onChange={(e)=> setEmail(e.target.value.trim())}/>
                <FormInput label="Password: " type="text" onChange={(e)=> setPassword(e.target.value.trim())}/>
                <Button  label="login"/>
                <p>Don't have an account? Click <Link className='homeLinks' to='/register'>here</Link> to sign up!</p>
            </form>
        </header>
    );
};

export default LoginPage;

