// libraries
import axios from "axios";

// constants
import { apiBaseUrl, apiTimeOut } from "../../config/env";
import {
  clearAllLocalData,
  getLocalData,
  LOCAL_STORAGE_KEYS,
} from "../../lib/helper/localStorage";
import { notfiFail } from "../../lib/helper/toast";

const axiosInstance = axios.create({
  baseURL: apiBaseUrl,
  timeout: apiTimeOut,
  withCredentials: true,
  headers: {
    Accept: "*/*",
  },
});

const UNAUTHORIZED = 401;
const NETWORK_CRASH = 502;

// REQUEST INTERCEPTOR
axiosInstance.interceptors.request.use(
  (request) => {
    request.headers.Authorization = `Bearer ${getLocalData(
      LOCAL_STORAGE_KEYS.authToken
    )}`;
    return request;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// RESPONSE INTERCEPTOR
axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (
      error?.response?.status === UNAUTHORIZED ||
      error?.response?.status === NETWORK_CRASH
    ) {
      clearAllLocalData();
    }
    console.log("error?.response :>> ", error?.response);

    if (error.hasOwnProperty("response")) {
      notfiFail(error?.response?.data?.message);
    } else {
      notfiFail(error?.message || error?.code || "Error");
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
