import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

// login
export const login = async (user, dispatch) => {
    console.log("From apiCalls(dispatch):", dispatch);
    console.log("From apiCalls(user):", user);
    dispatch(loginStart());

    try {
        const res = await axios.post("auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch(err) {
        dispatch(loginFailure());
    }
}