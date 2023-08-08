import {
  LOGIN_REQUEST,
} from "./types";

export const LoginAction = (params) => {
  return {
    type: LOGIN_REQUEST,
    params,
  };
};
