import Axios from "axios"; // Import Axios as default

const AxiosInstance = () => {
  const axiosInstance = Axios.create({
    baseURL: "https://fakestoreapi.com/",
    // withCredentials: true,
  });

  return axiosInstance; // Return the Axios instance
};

export default AxiosInstance();
