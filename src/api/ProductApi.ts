import axiosInstance from "@/services/AxiosInstance";


export const fetchProduct = () => {
    return axiosInstance.get("keyboard");
  };
  
export const fetchSingleProduct = (keyboard_slug: string) => {
    return axiosInstance.get(`/keyboard/${keyboard_slug}`);
}