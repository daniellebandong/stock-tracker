import React from 'react';
import {Link} from 'react-router-dom';
const HomePage = (props) => {
    return (
        <div>
            <h1>Stock's R Us</h1>
            <p>focus on people and we'll focus on the paperwork</p>
            <Link className="homeLinks" to="/login">Login</Link>
            <Link className="homeLinks" to="/register">Register</Link>
        </div>
    );
};

export default HomePage;