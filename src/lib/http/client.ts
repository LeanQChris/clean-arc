
import { baseURL } from "@/_common/api/endpoints";
import axios, { AxiosInstance } from "axios";
import https from "https";

const httpAgent = new https.Agent({
    rejectUnauthorized: false,
});

const httpClient: AxiosInstance = axios.create({
    baseURL: baseURL,
    httpsAgent: httpAgent,
    headers: {
        "Content-Type": "application/json"
    }
});

httpClient.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

httpClient.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response
        return response.data;
    },
    function (error) {
        console.log(error.request, "api error")
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    }
);


export default httpClient;
