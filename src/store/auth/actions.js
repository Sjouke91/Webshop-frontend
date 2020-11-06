import Axios from "axios";
import { API_URL } from "../../config";

export const userToken = (jwt) => {
  //   console.log("userToken", profile, jwt);

  return { type: "USER_TOKEN", payload: { jwt } };
};

export const login = (email, password) => async (dispatch, getState) => {
  //   console.log(email, password);
  try {
    const tokenRes = await Axios.post(`${API_URL}/login`, {
      email,
      password,
    });

    const jwt = tokenRes.data;

    localStorage.setItem("token", jwt);

    dispatch(userToken(jwt));
    dispatch(getUserProfile(jwt));
  } catch (error) {
    console.log("ERROR:", error);
  }
};

export const userProfile = (profile) => {
  //   console.log("userToken", profile, profile);

  return { type: "USER_PROFILE", payload: { profile } };
};

const getUserProfile = (token) => async (dispatch, getState) => {
  try {
    const userRes = await Axios.get(`${API_URL}/login/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("userRes", userRes);
    const profile = userRes.data;
    dispatch(userProfile(profile));
  } catch (error) {
    console.log("ERROR:", error);
    // dispatch(logout) // in case JWT TOKEN is invalid, logout is executed --> separate the actions for TOKEN and PROFILE to make this work
  }
};

export const logout = (dispatch, getState) => {
  dispatch({ type: "USER_LOGOUT" });
  localStorage.removeItem("token");
};
