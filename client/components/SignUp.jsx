import { Link, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
// import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import React from "react";

import { useSignupMutation } from "../slices/api/userApiSlice";
import { setCredentials } from "../slices/reducers/authSlice";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.auth);
  const [signup] = useSignupMutation();

  useEffect(() => {
    if(userData.userData) navigate('/');
  }, [userData, navigate])

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      // The promise returned by the dispatched thunk has an unwrap property which can be called to extract the payload of a fulfilled action or to throw either the error or, if available, payload created by rejectWithValue from a rejected action:
        const res = await signup({name, email, password }).unwrap();
        // toast.success("Sign up successfully!");
        dispatch(setCredentials(res));
    } catch (error) {
      //error?.data?.error: from server
      //error.data: from client
        // toast.error(error.data.error || error.data)
        console.log(error.data.error || error.data)
    }
  };

  return (
    <section>
      <div className="flex flex-col items-center justify-center mx-auto md:my-6">
        <div className="w-full border bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign Up
            </h1>

            <form onSubmit={submitHandler} className="space-y-4 md:space-y-6">
              <div>
                <label
                  // for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your name
                </label>
                <input
                  type="text"
                  value={name}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-amber-600 focus:border-amber-600 block w-full p-2.5 "
                  placeholder="Code Smith"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-amber-600 focus:border-amber-600 block w-full p-2.5 "
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-amber-600 focus:border-amber-600 block w-full p-2.5 "
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
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-amber-300 "
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
              </div>

              <button
                type="submit"
                className="w-full text-white bg-amber-500 hover:bg-amber-700 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign up
              </button>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Have you already had an account?{" "}
                <Link
                  to="/signin"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;