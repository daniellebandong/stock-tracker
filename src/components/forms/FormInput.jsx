import React from 'react';

const FormInput = (props) => {
    return (
        <div>
            <label htmlFor={props.id}>{props.label}</label>
            <input type={props.type} id={props.id} name = {props.name} />
        </div>
        

    );
};

export default FormInput;