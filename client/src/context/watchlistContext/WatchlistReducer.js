const WatchlistReducer = (state, action) => {
    switch (action.type) {
        case "GET_WATCHLISTS_START":
            return {
                watchlists: [],
                    isFetching: true,
                    error: false
            };
        case "GET_WATCHLISTS_SUCCESS":
            return {
                watchlists: action.payload,
                    isFetching: false,
                    error: false
            };
        case "GET_WATCHLISTS_FAILURE":
            return {
                watchlists: [],
                    isFetching: false,
                    error: true
            };
        case "CREATE_WATCHLIST_START":
            return {
                ...state,
                isFetching: true,
                    error: false
            };
        case "CREATE_WATCHLIST_SUCCESS":
            return {
                watchlists: [state.watchlist, action.payload],
                    isFetching: false,
                    error: false
            };
        case "CREATE_WATCHLIST_FAILURE":
            return {
                ...state,
                isFetching: false,
                    error: true
            };
        default:
            return {
                ...state
            };
    }
}

export default WatchlistReducer;