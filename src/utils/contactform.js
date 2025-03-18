import axios from "axios";
import { API_URL } from "./server";

export const postMessage = async (formData) => {
  try {
    // Sending the form data as a JSON payload
    const response = await axios.post(
      `${API_URL}/api/v1/misc/contact/us`,
      formData, // Send the formData as a JSON object
      {
        headers: {
          "Content-Type": "application/json", // Set the correct content type for JSON payload
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error posting message:", error);
    throw error;
  }
};
