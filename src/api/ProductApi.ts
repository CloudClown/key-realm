import axiosInstance from "@/services/AxiosInstance";


export const fetchProduct = () => {
    return axiosInstance.get("keyboard");
  };
  
export const fetchSingleProduct = (id: string) => {
    return axiosInstance.get(`/products/${id}`);
}