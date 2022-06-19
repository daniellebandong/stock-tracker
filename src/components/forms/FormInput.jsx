import React from 'react';

import './formstyles.scss'
const FormInput = (props) => {
    return (
            <div className='formDiv'>
                <label htmlFor={props.id}>{props.label}</label>
                <input type={props.type} id={props.id} name = {props.name} />
            </div>

        
    );
};

export default FormInput;