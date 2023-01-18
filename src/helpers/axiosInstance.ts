import Axios from "axios";
import {getAccessToken} from "./sessionKey";

const API_ROOT ='https://usermanagement.dibtech.com.au/api/'

const apiInstance = Axios.create({
  baseURL: `${API_ROOT}`,
  headers: {
    "Content-type": "Application/json",
    // 'Content-Type': 'multipart/form-data'
    "Authorization": `JWT ${getAccessToken()}`,
  },
});

export {apiInstance, API_ROOT};