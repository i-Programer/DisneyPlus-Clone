import axios from "axios";
import { getUsersFailure, getUsersStart, getUsersSuccess } from "./UserActions"

// get
export const getUsers = async (dispatch) => {
    dispatch(getUsersStart());

    try {
        const res = await axios.get("/users", {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        });
        dispatch(getUsersSuccess(res.data));
    } catch (err) {
        dispatch(getUsersFailure);
    }
}