import { baseApi } from "../api";

class AuthService {
    login(username, password) {
        return baseApi
            .post("/auth/signin", { username, password })
            .then((response) => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response.data;
            });
    }
    logout() {
        localStorage.removeItem("user");
    }
    register(username, password) {
        return baseApi.post("/auth/signup", {
            username,
            password,
        });
    }
}
export default new AuthService();
