import React from 'react';

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