import React from 'react';

import './buttonstyles.scss';
const Button = (props) => {
    return (
        <div>
            <button>
                {props.label}
                {props.children}
            </button>
        </div>
    );
};

export default Button;