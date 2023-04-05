import React from 'react';
import Button from '../buttons/Button';

const RegisterFormType = (props) => {
    return (
        <form action="">
          <input required class="relative block w-full rounded border border-gray-300 px-3 py-2 my-1 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="First Name"/>
          <input required class="relative block w-full rounded border border-gray-300 px-3 py-2 my-1 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Last Name"/>
          <input required class="relative block w-full rounded border border-gray-300 px-3 py-2 my-1 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Username"/>
          <input required class="relative block w-full rounded border border-gray-300 px-3 py-2 my-1 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email Address"/>
          <input required class="relative block w-full rounded border border-gray-300 px-3 py-2 my-1 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" type="password" placeholder="Password"/>
          <input required class="relative block w-full rounded border border-gray-300 px-3 py-2 my-1 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" type="password" placeholder="Confirm Password"/>
          <Button>Register</Button>
        </form>
        
    );
};

export default RegisterFormType;