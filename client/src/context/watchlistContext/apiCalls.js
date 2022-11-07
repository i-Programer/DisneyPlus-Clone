import axios from "axios";
import {
    createWatchlistsFailure,
    createWatchlistsStart,
    createWatchlistsSuccess,
    getWatchlistsFailure,
    getWatchlistsStart,
    getWatchlistsSuccess
} from "./WatchlistActions";

// create
export const createWatchlist = async (watchlist, dispatch) => {
    dispatch(createWatchlistsStart());

    try {
        const res = await axios.post("/watchlists", watchlist, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            }
        });
        dispatch(createWatchlistsSuccess(res.data));
    } catch (err) {
        dispatch(createWatchlistsFailure());
    }
}


// get
export const getWatchlists = async (userId, dispatch) => {
    dispatch(getWatchlistsStart());

    try {
        const res = await axios.get('/watchlists/' + userId, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            }
        });
        dispatch(getWatchlistsSuccess(res.data));
    } catch (err) {
        dispatch(getWatchlistsFailure());
    }
}