import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../img/stocklogo.webp'
import Button from '../components/buttons/Button';

const HomePage = (props) => {
    return (
        <div className='p-1'>
            <div className='text-center'>
            <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>Stock's R Us</h1>
            <p>Investing made so simple a toddler could do it</p>
            </div>
            <Button><Link to="/login">Login</Link></Button>
            <Button><Link to="/register">Register</Link></Button>
        </div>
    );
};

export default HomePage;