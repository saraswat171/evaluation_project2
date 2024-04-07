
import axios from "axios";
import { logInAction, logOutAction, signUpAction } from "./authType";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const authuser = createAsyncThunk(
  signUpAction,
  async ({name, email, password , role}, { rejectWithValue }) => {
    console.log('email: ', email);
    try {
      const response = await axios.post('http://localhost:8080/usersinfo', { name ,email, password , role });

      return response.data;
    }
    catch (err) {
      console.log("errpor", err.response.data)
      return rejectWithValue(err.response.data);

    }
  }
);

export const loginUser = createAsyncThunk(
  logInAction,
  async ({ email, password }, { rejectWithValue }) => {
    console.log('email, password: ', email, password);
    try {
      const response = await axios.post('http://localhost:8080/logininfo', { email, password });

      console.log('response redux', response.data)
      localStorage.setItem('user',JSON.stringify(response.data.user) );
      localStorage.setItem('logged', 'true'); // Store logged state in local storage
      localStorage.setItem('token', response.data.token);
      return response.data;
    }
    catch (err) {
     // console.log('error3', err.response.data.message)
      return rejectWithValue( err.response.data.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  logOutAction,
  async () => {
  try{
    console.log('logout')
    localStorage.removeItem('logged'); // Remove logged state from local storage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
   const response= await axios.post('http://localhost:8080/logout');
    return response.data;
  }
  catch(err){
    return (err.message);
  }
  }
);
