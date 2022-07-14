export const baseApi = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:5000",
});