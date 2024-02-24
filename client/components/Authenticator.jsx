import React, { Component } from 'react';
import { Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
// import { toast } from "react-toastify";

import { useLoginMutation } from '../slices/api/userApiSlice';
import { setCredentials } from '../slices/reducers/authSlice';

const Authenticator = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth);

  const [login, { isLoading }] = useLoginMutation();

  useEffect(() => {
    if (userData.userData) {
      navigate('/');
    } else {
      navigate('/signin');
    }
  }, [userData]);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      // The promise returned by the dispatched thunk has an unwrap property which can be called to extract the payload of a fulfilled action or to throw either the error or, if available, payload created by rejectWithValue from a rejected action:
      const res = await login({ email, password }).unwrap();
      // toast.success("Login successfully!");
      dispatch(setCredentials(res));
    } catch (error) {
      //error?.data?.error: from server
      //error.data: from client
      // toast.error(error.data.error || error.data)
      console.log(error.data.error || error.data);
    }
  };
  return (
    <section className="">
      <div className="flex flex-col items-center justify-center mx-auto md:my-6">
        <div className="w-full border bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign In
            </h1>

            <form onSubmit={submitHandler} className="space-y-4 md:space-y-6">
              <div>
                <label
                  // for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  value={email}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-yellow-600 focus:border-yellow-600 block w-full p-2.5 "
                  placeholder="name@gmail.com"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label
                  // for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-yellow-600 focus:border-yellow-600 block w-full p-2.5 "
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      // aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-yellow-300 "
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      // for="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <Link
                  to="#"
                  className="text-sm font-medium text-yellow-800 hover:underline dark:text-yellow-500"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full text-white bg-yellow-500 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign in
              </button>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{' '}
                <Link
                  to="/signup"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authenticator;
