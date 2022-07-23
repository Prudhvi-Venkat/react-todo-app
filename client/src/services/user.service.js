import { baseApi } from '../api';
import authHeader from './auth-header';

class UserService {
    getContent() {
        return baseApi.get("/todos", { headers: authHeader() });
    }
}
export default new UserService();
