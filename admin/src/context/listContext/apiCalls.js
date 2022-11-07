import axios from "axios";
import {
    createListsFailure,
    createListsStart,
    createListsSuccess,
    deleteListFailure,
    deleteListStart,
    deleteListSuccess,
    getListsFailure,
    getListsStart,
    getListsSuccess,
    updateListFailure,
    updateListStart,
    updateListSuccess
} from "./ListActions";

// get
export const getLists = async (dispatch) => {
    dispatch(getListsStart());

    try {
        const res = await axios.get("/lists", {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })
        dispatch(getListsSuccess(res.data));
    } catch (err) {
        dispatch(getListsFailure());
    }
}

// create
export const createList = async (list, dispatch) => {
    dispatch(createListsStart());

    try {
        const res = await axios.post("/lists", list, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })
        dispatch(createListsSuccess(res.data));
    } catch (err) {
        dispatch(createListsFailure())
    }
}

// update
export const updateList = async (listId, updatedList, dispatch) => {
    dispatch(updateListStart());

    try {
        await axios.put("/lists/" + listId, updatedList, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        });
        dispatch(updateListSuccess(listId));
    } catch (err) {
        dispatch(updateListFailure());
    }
}

// delete
export const deleteList = async (id, dispatch) => {
    dispatch(deleteListStart());

    try {
        await axios.delete("/lists/" + id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        });
        dispatch(deleteListSuccess(id));
    } catch (err) {
        dispatch(deleteListFailure());
    }
}