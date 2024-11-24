import axios from "axios";

const baseApiResponse = (data, isSuccess) => {
  return {
    success: isSuccess,
    data: data || null,
  };
};

export const userLogin = async (formData) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();

    if (response.ok) {
      return { success: true, message: data.message };
    } else {
      return { success: false, message: data.message };
    }
  } catch (err) {
    return { success: false, message: 'Something went wrong. Please try again.' };
  }
};

export const userSignUp = async (formData) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/user/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      return { success: true, message: data.message }; // Success response
    } else {
      return { success: false, message: data.message }; // Error response
    }
  } catch (err) {
    return { success: false, message: 'Something went wrong. Please try again.' };
  }
};

