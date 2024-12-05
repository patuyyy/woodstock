import axios from "axios";

const baseApiResponse = (data, isSuccess) => {
  return {
    success: isSuccess,
    data: data || null,
  };
};

export const userLogin = async (formData) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/user/login`,
      formData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.status === 200) {
      return { data: response.data.data, success: true, message: response.data.message };
    } else {
      return { success: false, message: response.data.message };
    }
  } catch (err) {
    return { success: false, message: err.response?.data?.message || 'Something went wrong. Please try again.' };
  }
};

export const userSignUp = async (formData) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/user/register`,
      formData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.status === 200) {
      return { success: true, message: response.data.message }; // Success response
    } else {
      return { success: false, message: response.data.message }; // Error response
    }
  } catch (err) {
    return { success: false, message: err.response?.data?.message || 'Something went wrong. Please try again.' };
  }
};
