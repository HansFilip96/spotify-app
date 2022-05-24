import * as actionTypes from "./actionTypes";
import { getAccessToken } from "../../utils/function";

export const fetchTokenStart = () => {
  return { type: actionTypes.AUTH_START };
};
export const fetchTokenSuccess = (payload) => {
  return { type: actionTypes.AUTH_SUCCESS, payload };
};
export const fetchTokenFail = (payload) => {
  return { type: actionTypes.AUTH_FAIL, payload };
};

export const fetchToken = () => {
  return async (dispatch) => {
    dispatch(fetchTokenStart());
    try {
      const token = getAccessToken();
      dispatch(fetchTokenSuccess(token));
    } catch (error) {
      dispatch(fetchTokenFail(error));
    }
  };
};

export const fetchUserStart = () => {
  return { type: actionTypes.FETCH_CURRENT_USER_START };
};
export const fetchUserSuccess = (payload) => {
  return { type: actionTypes.FETCH_CURRENT_USER_SUCCESS, payload };
};
export const fetchUserFail = (payload) => {
  return { type: actionTypes.FETCH_CURRENT_USER_FAIL, payload };
};

export const fetchUser = (spotifyApi) => {
  return async (dispatch) => {
    dispatch(fetchUserStart());
    try {
      const me = await spotifyApi.getMe();
      dispatch(fetchUserStart(me));
    } catch (error) {
      dispatch(fetchUserFail(error));
    }
  };
};