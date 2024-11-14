import axios from "axios";
import Cookies from "js-cookie";

import { API_URL } from "./server.js";

export const login = async (userType, email, password) => {
  const response = await axios.post(
    userType === "patient"
      ? `${API_URL}/api/v1/auth/login/patient/password`
      : `${API_URL}/api/v1/auth/login/driver/password`,
    {
      // userType,
      email,
      password,
    }
  );
  console.log("responseresponse", response);
  Cookies.set("userType", response.data.data.user.role);
  Cookies.set("id", response.data.data.user.id);
  Cookies.set("token", response.data.data.token);
  return response;
};
export const register = async (formdata) => {
  const {
    userType,
    name,
    email,
    password,
    country_code,
    phone_number,
    region,
    gender,
  } = formdata;
  console.log("formdata", formdata);
  const response = await axios.post(
    userType === "patient"
      ? `${API_URL}/api/v1/auth/register/patient`
      : `${API_URL}/api/v1/auth/register/driver`,
    { name, email, password, country_code, phone_number, region, gender }
  );
  return response;
};

export const sendOtp = async (country_code, phone_number, userType) => {
  const response = await axios.post(
    `${API_URL}/api/v1/auth/resend/otp/register`,
    {
      country_code: country_code,
      phone_number,
    }
  );
  return response.data;
};

export const verifyOtp = async (country_code, phone_number, otp, userType) => {
  const response = await axios.post(
    `${API_URL}/api/v1/auth/verify/otp/register`,
    {
      country_code: country_code,
      phone_number,
      otp,
    }
  );
  console.log("verifyOtpResponse", response);
  Cookies.set("userType", response.data.data.userType);
  Cookies.set("id", response.data.data.id);
  Cookies.set("token", response.data.data.token);
  return response.data;
};

export const getUser = async () => {
  try {
    const userType = Cookies.get("userType");
    const id = Cookies.get("id");
    const token = Cookies.get("token");
    console.log("Cookies.get", Cookies.get("token"));
    const response = await axios
      .get(`${API_URL}/api/v1/auth/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      // .then((response) => {
      //   console.log(response);
      //   return response.data.data.user;
      // })
      // .catch((error) => console.log(error));
    return response.data.data.user;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const logout = () => {
  Cookies.remove("token");
  Cookies.remove("id");
  Cookies.remove("userType");
};

export const getToken = () => {
  return Cookies.get("token");
};
