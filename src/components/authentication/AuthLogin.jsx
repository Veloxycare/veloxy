import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { login } from "../../utils/auth.js"; 
import { ToastContainer, toast } from "react-toastify";
import "../../../public/Styles/global.css";
import "react-toastify/dist/ReactToastify.css";
import ClipLoader from "react-spinners/ClipLoader.js";
const AuthLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState("passenger");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    setIsLoading(true)
    e.preventDefault();
    try {
      const res = await login(userType, email, password);
      toast.success("Login Sucessful.");
      window.location.href = "/";
    } catch (error) {
      toast.error(error.response.data.message);
    }
    finally{
      setIsLoading(false)
    }
  };
  const handleSignupNavigation = () => {
    window.history.replaceState(null, "", "/signup");
    window.location.href = "/signup";
  };

  return (
    <div className="container lg:max-w-[500px] mx-auto px-5 h-screen flex items-center justify-center">
      <div className=" w-full mx-auto  shadow-none p-5 bg-white lg:shadow-lg flex  flex-col   rounded-lg">
        <div className="sm:mx-auto  w-full lg:max-w-lg">
          <img
            alt="Veloxy"
            src="/images/logo.png"
            className="mx-auto h-40 w-40"
          />

          <p className="text-center text-lg font-normal text-primary">
            Welcome Back!
          </p>
          <p className="text-center text-lg font-normal text-primary">
            Please login to continue
          </p>
        </div>

        <div className="mt-4 sm:mx-auto w-full lg:max-w-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="mb-2">
              <label
                htmlFor="userType"
                className="mr-2 text-sm font-medium text-primary"
              >
                User Type:
              </label>
              <select
                id="userType"
                name="userType"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                required
                className="block w-full h-10 mt-2 rounded-md border-0 p-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-2"
              >
                <option value="driver">Driver</option>
                <option value="passenger">Passenger</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-2 text-primary"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  className="block w-full h-10 outline-none rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-2"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-2 text-primary"
                >
                  Password
                </label>
              </div>
              <div className="mt-2 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  className="block w-full h-10 rounded-md outline-none border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-2"
                />
                <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <FaEyeSlash className="h-5 w-5 text-gray-500" />
                  ) : (
                    <FaEye className="h-5 w-5 text-gray-500" />
                  )}
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full h-10 justify-center rounded-md bg-primary px-3 py-3 text-sm font-semibold leading-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="my-3 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <span
            onClick={handleSignupNavigation}
            className="font-semibold leading-2 text-primary hover:text-indigo-500 cursor-pointer"
          >
            Signup
          </span>
        </p>
        </div>
      </div>
      {isLoading && (
        <div className="loader-container">
          <ClipLoader color="#3C3E83" loading={isLoading} size={100} />
        </div>
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
   
    </div>
  );
};

export default AuthLogin;
