import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../../../public/Styles/global.css";
import { register, sendOtp, verifyOtp } from "../../utils/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthSignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    country_code:"+1",
    phone_number: "",
    region: "US",
    userType: "patient",
    gender: "male",
    schedule:"morning"
  });
  const [updatedFormData, setUpdatedFormData] = useState({
    name: "",
    email: "",
    password: "",
    country_code:"+1",
    phone_number: "",
    region: "US",
    userType: "patient",
    gender: "male"
  });
  const finalFormData = {
    name: '',
    email: '',
    password: '',
    phone_number: '',
    userType: "patient",
    gender: "male"
  };
  const [showPassword, setShowPassword] = useState(false);
  const [showOtpContainer, setShowOtpContainer] = useState(false);
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // if (name === 'phone_number') {
    //   setFormData((prevFormData) => ({
    //     ...prevFormData,
    //     [name]: `${prevFormData.country_code}${value}`
    //   }));
    // }
    // else{
      setFormData((prevFormData) => ({
       ...prevFormData,
        [name]: value
    }));
  // }
  };

  const regions=[
    {
      country_code: "+91",
      country_name: "India",
      region:"IN",
    },
    {
      country_code: "+1",
      country_name: "USA",
      region:"US",
    }
  ]

  const handlePhoneChange = (e) => {
    const { name, value } = e.target;
  
    const [country_code, region] = value.split('-');
    setFormData((prevFormData) => ({
      ...prevFormData,
      country_code,
      region
    }));
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedFormData = {
      ...formData,
      phone_number:`${formData.country_code}${formData.phone_number}`
    };
    setUpdatedFormData(updatedFormData)
    setIsLoading(true); // Show the progress circle
    try {
      console.log("formDatass",formData)
      const response = await register(updatedFormData);
      if (response.status === 200) {
        toast.success("Registration Successful.");
        setShowOtpContainer(true);
      }
    } catch (error) {
      setIsLoading(false)
      toast.error(error.response?.data?.message || "An error occurred. Please try again.");
    } finally {
      setIsLoading(false); // Hide the progress circle
    }
  };

  const handleVerifyOtp = async () => {
    setIsLoading(true); // Show the progress circle
    try {
      const response = await verifyOtp(updatedFormData.country_code, updatedFormData.phone_number, otp, updatedFormData.userType);
      toast.success("OTP verified successfully!");
      setShowOtpContainer(false);
      setFormData(finalFormData);
      if(userType==="driver"){
        window.location.href = "/driver-requirements";
      }else{
        window.location.href = "/";
      }
    } catch (error) {
      setIsLoading(false)
      toast.error(error.response?.data?.message || "An error occurred. Please try again.");
    } finally {
      setIsLoading(false); // Hide the progress circle
    }
  };


  const ResendOtp = async () => {
    setIsLoading(true)
    try {
      await sendOtp(updatedFormData.country_code, updatedFormData.phone_number, updatedFormData.userType);
      setIsLoading(false)
      toast.success("OTP resent successfully!");

    } catch (error) {
      setIsLoading(false)
      toast.error(error.response?.data?.message || "An error occurred. Please try again.");
    }
  };

  const handleSigninNavigation = () => {
    window.history.replaceState(null, "", "/login");
    window.location.href = "/login";
  };

  return (
    <div className="container lg:max-w-[500px] mx-auto px-5 h-screen flex items-center justify-center">
      <div className=" w-full mx-auto  shadow-none p-5 bg-white lg:shadow-lg flex  flex-col   rounded-lg">
      <div className="sm:mx-auto sm:w-full  mt-5">
        <h2 className="text-center text-4xl font-bold leading-12 text-primary">
          Signup
        </h2>
        <h2 className="mt-2 text-center text-lg font-normal leading-6 text-primary">
          Create your account
        </h2>
      </div>

      <div className="mt-0 sm:mx-auto sm:w-full ">
        <div className="mt-1 sm:mx-auto sm:w-full ">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-2 text-primary">
                Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-class sm:leading-2"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-2 text-primary">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  className="input-class sm:leading-2"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-2 text-primary">
                  Password
                </label>
              </div>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  required
                  autoComplete="current-password"
                  className="input-class sm:leading-2"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer" onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEyeSlash className="h-5 w-5 text-gray-500" /> : <FaEye className="h-5 w-5 text-gray-500" />}
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="phone_number" className="block text-sm font-medium leading-2 text-primary">
                Mobile Number
              </label>
              <div className="mt-1 flex">
                 <select
                    name="country_code"
                    value={`${formData.country_code}-${formData.region}`}
                    onChange={handlePhoneChange}
                    className="input-class w-20 md:basis-3/12 sm:leading-1 mr-2"
                  >
                    <option value="+1-US">+1 (USA)</option>
                    <option value="+1-CA">+1 (Canada)</option>
                    {/* Add more country codes as needed */}
                  </select>
                  <input
                    id="phone_number"
                    name="phone_number"
                    type="tel"
                    value={formData.phone_number}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                      if (value.length <= 10) {
                        handleChange({
                          target: {
                            name: e.target.name,
                            value,
                          },
                        });
                      }
                    }}
                    required
                    className="input-class md:basis-9/12 sm:leading-3"
                  />


              </div>
            </div>

            <div className="flex space-x-2">
              <div className="flex-1">
                <label htmlFor="userType" className="block text-sm font-medium leading-2 text-primary">
                  User Type
                </label>
                <select
                  id="userType"
                  name="userType"
                  value={formData.userType}
                  onChange={handleChange}
                  required
                  className="input-class sm:leading-2"
                >
                  <option value="driver">Driver</option>
                  <option value="patient">Passenger</option>
                </select>
              </div>

              <div className="flex-1">
                <label htmlFor="gender" className="block text-sm font-medium leading-2 text-primary">
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="input-class sm:leading-2"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {formData.userType==="driver" && (
              <div className="flex-1">
                  <label htmlFor="gender" className="block text-sm font-medium leading-2 text-primary">
                    Driving Schedule
                  </label>
                  <select
                    id="schedule"
                    name="schedule"
                    value={formData.schedule}
                    onChange={handleChange}
                    className="input-class sm:leading-2"
                  >
                    <option value="morning">Morning</option>
                    <option value="afternoon">Afternoon</option>
                    <option value="nighttime">Nighttime</option>
                    <option value="holidays">Holidays</option>
                    <option value="special_events">Special Events</option>

                  </select>
                </div>
              )}

            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-primary px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Sign up
              </button>
            </div>
          </form>
        </div>

        <p className="my-4 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <span onClick={handleSigninNavigation} href="/login" className="font-semibold leading-2 text-primary cursor-pointer hover:text-indigo-500">
            Sign in
          </span>
        </p>
      </div>

      {showOtpContainer && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-10 rounded-lg text-center text-primary shadow-lg">
            <p className="mt-2">You’ve received a four digit code on</p>
            <p className="mt-1">{formData.country_code} {formData.phone_number}</p>
            <p className="mt-1">Please enter it below to continue</p>
            <h3 className="text-xl font-semibold mb-4">Enter OTP</h3>
            <input
              type="text"
              value={otp}
              onChange={handleOtpChange}
              className="input-class"
              placeholder="Enter OTP"
            />
            <button
              onClick={handleVerifyOtp}
              className="mt-3 w-full rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white"
            >
              Submit OTP
            </button>
            <button
              className="mt-3 w-full rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white"
              onClick={ResendOtp}
            >
              Resend OTP
            </button>
          </div>
        </div>
      )}
{isLoading && (
  <div className="loader-container">
    <div className="loader"></div>
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
      />
    </div>
    </div>
  );
};

export default AuthSignup;

