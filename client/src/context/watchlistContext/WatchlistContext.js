import WatchlistReducer from "./WatchlistReducer";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
    watchlists: [],
    isFetching: false,
    error: false,
}

export const WatchlistContext = createContext(INITIAL_STATE);

export const WatchlistContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(WatchlistReducer, INITIAL_STATE);

    return (
        <WatchlistContext.Provider
            value={{
                watchlists: state.watchlists,
                isFetching: state.isFetching,
                error: state.error,
                dispatch
            }}
        >
            {children}
        </WatchlistContext.Provider>
    )
}