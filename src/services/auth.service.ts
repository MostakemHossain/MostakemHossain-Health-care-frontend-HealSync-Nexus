import { authKey } from "@/constants/authKey";
import { decodeToken } from "@/utils/jwt";
import {
  getFormLocalStorage,
  removeFormLocalStorage,
  setToLocalStorage,
} from "@/utils/localStorage";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage(authKey, accessToken);
};

export const getUserInfo = () => {
  const authToken = getFormLocalStorage(authKey);
  if (authToken) {
    const decodeData: any = decodeToken(authToken);
    return {
      ...decodeData,
      role: decodeData.role.toLowerCase(),
    };
  }
};

export const isLoggedIn = () => {
  const authToken = getFormLocalStorage(authKey);
  if (authToken) {
    return !!authToken;
  }
};
export const removeUser = () => {
  return removeFormLocalStorage(authKey);
};
