import { REGISTER_SUCCESS, AUTH_ERROR, USER_LOADED, REGISTER_FAIL } from "./types";

import axios from "axios";
import setAuthToken from "../utils/setAuthToken";

export const loadUser = () => async (dispatch) => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get("http://localhost:5000/api/users");
  
        dispatch({
           type: USER_LOADED,
           payload: res.data,
        });
     } catch (err) {
        dispatch({
           type: AUTH_ERROR,
        });
     }
}

export const register = ({ screenName, email, password }) => async (
  dispatch
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ screenName, email, password });

  try {
    const res = await axios.post(
      "http://localhost:5000/api/users/register",
      body,
      config
    );

    dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
    })

    dispatch(loadUser());
  } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
          errors.forEach((error) => alert(error.msg));
      }

      dispatch({
          type: REGISTER_FAIL
      })
  }
};
