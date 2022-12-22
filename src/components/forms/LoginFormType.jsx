import React from 'react';


const LoginFormType = (props) => {
    return (
        <div>
          <input required class="relative block w-full rounded border border-gray-300 px-3 py-2 my-1 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder={props.label}/>
        </div>
        
    );
};

export default LoginFormType;