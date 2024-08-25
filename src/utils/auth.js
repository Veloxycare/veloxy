
import axios from 'axios';
import Cookies from 'js-cookie';

import {API_URL} from "./server.js"

export const login = async (userType, email, password) => {
  const response = await axios.post(`${API_URL}/authentication/login`, { userType ,email, password });
  Cookies.set('userType', response.data.userType);
  Cookies.set('id', response.data.id);
  Cookies.set('token', response.data.token);
  return response;
};
export const register = async (formdata) => {
  const {userType, name, email, password, mobile_no, gender} = formdata
  const response = await axios.post(`${API_URL}/authentication/register`, { userType, name, email, password, mobile_no, gender });
  return response;
};


export const sendOtp = async (mobile_no, userType) => {
  const response = await axios.post(`${API_URL}/authentication/send-otp`, { mobile_no, userType });
  return response.data;
};

export const verifyOtp = async (mobile_no, otp, userType) => {
  const response = await axios.post(`${API_URL}/authentication/verify-otp`, { mobile_no, otp, userType });
  Cookies.set('userType', response.data.userType);
  Cookies.set('id', response.data.id);
  Cookies.set('token', response.data.token);
  return response.data;
};

export const getUser = async () => {
    try {
    const userType = Cookies.get("userType");
    const id = Cookies.get("id");
      const response = await axios.get(`${API_URL}/passengers/get-passengers`, {
        params: { userType, id }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error;
    }
  };

  export const logout = () => {
    Cookies.remove('token');
    Cookies.remove('id');
    Cookies.remove('userType');
  };

export const getToken = () => {
  return Cookies.get('token');
};

