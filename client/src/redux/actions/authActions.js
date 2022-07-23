import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
} from "./actionTypes.js";
import AuthService from "../../services/auth.service"

export const register = (username, password) => async (dispatch) => {
    return await AuthService.register(username, password).then(
        (response) => {
            dispatch({
                type: REGISTER_SUCCESS,
            });
            dispatch({
                type: SET_MESSAGE,
                payload: response.data.message,
            });
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            dispatch({
                type: REGISTER_FAIL,
            });
            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });
        }
    );
};
export const login = (username, password) => async (dispatch) => {
    return await AuthService.login(username, password).then(
        (data) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: { user: data },
            });
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            dispatch({
                type: LOGIN_FAIL,
            });
            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });
        }
    );
};
export const logout = () => (dispatch) => {
    AuthService.logout();
    dispatch({
        type: LOGOUT,
    });
};
