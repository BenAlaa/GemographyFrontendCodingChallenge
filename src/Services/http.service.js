import axios from "axios";
import { toast } from "react-toastify";


// Add Default Api configuration
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    toast.error("Unexpected error happend");
  } else {
    toast.error(error?.response?.data);
  }
  return Promise.reject(error);
});


const methods = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete
};
export default methods;