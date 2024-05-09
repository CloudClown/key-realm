import Axios from "axios"; // Import Axios as default

const AxiosInstance = () => {
  const axiosInstance = Axios.create({
    baseURL: "http://localhost:5000/api/",
    // withCredentials: true,
  });

  return axiosInstance; // Return the Axios instance
};

export default AxiosInstance();
