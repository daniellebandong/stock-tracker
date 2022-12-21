import React from 'react';


const FormInput = (props) => {
    return (
        <div>
          <label for='Email Address' class="sr-only"></label>
          <input id="email-address"  required class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder={props.id}/>
        </div>
        
    );
};

export default FormInput;