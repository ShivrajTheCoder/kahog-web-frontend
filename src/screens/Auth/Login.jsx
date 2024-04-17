import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { adminLogin } from '../../redux/reducers/adminReducer';
import { setDataWithExpiry } from '../../utils/localstore';
import { useNavigate } from 'react-router-dom';
import homiee from "../../assets/homepage/homiee.jpg";

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
        const userId = id;
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
    <div className=" h-screen bg-blue-300 flex justify-center items-center">
      <div className='h-2/3 w-2/3 grid grid-cols-2 '>
        <img src={homiee} alt="Homiee" className=" h-full w-full" />
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 ">
          <h2 className="text-2xl font-semibold mb-4 text-center">Admin Login</h2>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              value={values.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded-full w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              value={values.password}
              onChange={handleChange}
              className="shadow appearance-none border rounded-full w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
          </div>
          {errors.message && <p className="text-red-500 mb-4 text-center">{errors.message}</p>}
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
