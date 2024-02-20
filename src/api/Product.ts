import axiosInstance from "@/services/AxiosIntance";


export const fetchProduct = () => {
    return axiosInstance.get("/products");
  };
  
export const fetchSingleProduct = (id: string) => {
    return axiosInstance.get(`/products/${id}`);
}