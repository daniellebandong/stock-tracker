import React from 'react';

const RegisterFormType = (props) => {
    return (
        <form action="">
          <input required class="relative block w-full rounded border border-gray-300 px-3 py-2 my-1 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email Address"/>
          <input required class="relative block w-full rounded border border-gray-300 px-3 py-2 my-1 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" type="password" placeholder="Password"/>
        </form>
        
    );
};

export default RegisterFormType;