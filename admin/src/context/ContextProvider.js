import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react"

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState("#03C9D7")

    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
    }

    return (
        <StateContext.Provider value={{
            activeMenu,
            screenSize,
            currentColor,
            setActiveMenu,
            setScreenSize,
            setCurrentColor
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);