import axios from "axios";
import { API_URL } from "./server";
export const postMessage = async (formData) => {
  try {
    const encodedData = new URLSearchParams();
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        encodedData.append(key, formData[key]);
      }
    }

    const response = await axios.post(
      `${API_URL}/contact-form/create-new-contact-form`,
      encodedData.toString(),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error posting message:", error);
    throw error;
  }
};
