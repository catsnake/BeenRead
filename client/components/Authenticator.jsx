import React, { Component } from "react";
import { Router, Route, Routes, Link, BrowserRouter } from "react-router-dom";

import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

// import { toast } from "react-toastify";

import { useLoginMutation } from "../slices/api/userApiSlice";
import { setCredentials } from "../slices/reducers/authSlice";

const Authenticator = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth);

  const [login, { isLoading }] = useLoginMutation();

  useEffect(() => {
    if (userData.userData) {
      navigate("/feed");
    } else {
      navigate("/");
    }
  }, [userData]);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      // The promise returned by the dispatched thunk has an unwrap property which can be called to extract the payload of a fulfilled action or to throw either the error or, if available, payload created by rejectWithValue from a rejected action:
      const res = await login({ email, password }).unwrap();
      // toast.success("Login successfully!");
      dispatch(setCredentials(res));
    console.log('log')
    } catch (error) {
      //error?.data?.error: from server
      //error.data: from client
      // toast.error(error.data.error || error.data)
      // console.log(error.data.error || error.data);
      console.log(error)
    }
  };
  return (
    <div  id="login" class="flex flex-col items-center justify-center mx-auto md:my-6  w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form onSubmit={submitHandler} class="space-y-6" action="/">
        <h5 class="text-xl font-medium text-gray-900 dark:text-white">
          Sign In
        </h5>
        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            type="email"
            name="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="name@company.com"
            required
          />
        </div>
        <div>
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>
        {/* <div class="flex items-start">
            <div class="flex items-start">
                <div class="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                </div>
                <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
            <a href="#" class="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Forgot Your Password?</a>
        </div> */}
        <button
          type="submit"
          class="w-full text-white bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login to your account
        </button>
        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
          Not registered?{" "}
          <Link
            to="/signup"
            class="text-black hover:underline dark:text-blue-500"
          >
            Create account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Authenticator;
