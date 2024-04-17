import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { adminLogin } from '../../redux/reducers/adminReducer';
import { setDataWithExpiry } from '../../utils/localstore';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input';

export default function AdminLogin() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({
      email: '',
      password: '',
      message: ''
    });

    try {
      // Perform validation before sending request
      if (!values.email) {
        setErrors(prev => ({
          ...prev,
          email: 'Email is required'
        }));
        return;
      }

      if (!values.password) {
        setErrors(prev => ({
          ...prev,
          password: 'Password is required'
        }));
        return;
      }

      // Make API call
      const response = await axios.post(`${apiUrl}/auth/adminlogin`, values);

      // Handle success, redirect, etc.
      if (response.status === 200) {
        const { token, admin } = response.data;
        console.log(response);
        const { id, username } = admin;
        const userId=id;
        dispatch(adminLogin({ token, userId }));
        setDataWithExpiry("admin", { token, userId, creatorId: 1 }, 5);
        navigate("/dashboard");
      }
    } catch (error) {
      // Handle error response
      console.log(error);
      if (error.response) {
        const { data } = error.response;
        if (data.errors) {
          // Set errors from server response
          setErrors(data.errors);
        } else if (data.message) {
          // Set general error message
          setErrors(prev => ({
            ...prev,
            message: data.message
          }));
        }
      } else {
        // Handle other types of errors
        console.error('Error occurred:', error);
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-semibold mb-4 text-center">Admin Login</h2>
        <Input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
        />
        <Input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={values.password}
          onChange={handleChange}
          error={errors.password}
        />
        {errors.message && <p className="text-red-500 mb-4 text-center">{errors.message}</p>}
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
