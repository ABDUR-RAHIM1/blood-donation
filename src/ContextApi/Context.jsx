import React, { useContext, useState } from "react";

 export const globalState = useContext();

export const GlobalContext = ({ children }) => {
    const [count, setCount] = useState(0)
    const value = {
        count, setCount
    }

    return <globalState.Provider value={value}>{children}</globalState.Provider>
}