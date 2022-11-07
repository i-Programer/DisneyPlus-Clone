export const getWatchlistsStart = () => ({
    type: "GET_WATCHLISTS_START",
});

export const getWatchlistsSuccess = (movies) => ({
    type: "GET_WATCHLISTS_SUCCESS",
    payload: movies,
});

export const getWatchlistsFailure = () => ({
    type: "GET_WATCHLISTS_FAILURE",
});

export const createWatchlistsStart = () => ({
    type: "CREATE_WATCHLISTS_START",
});

export const createWatchlistsSuccess = (movie) => ({
    type: "CREATE_WATCHLISTS_SUCCESS",
    payload: movie,
});

export const createWatchlistsFailure = () => ({
    type: "CREATE_WATCHLISTS_FAILURE",
});