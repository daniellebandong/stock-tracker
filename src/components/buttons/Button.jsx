import React from 'react';

const Button = (props) => {
    return (
        <div>
            <div>
                {props.label}
                {props.children}
            </div>
        </div>
    );
};

export default Button;