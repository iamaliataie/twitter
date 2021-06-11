import axios from "axios";

export const AxiosInstance = () => {
    return axios.create({
        baseURL: "http://localhost:3000",
    })
}