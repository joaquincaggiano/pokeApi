// CreateContext
import { createContext } from "react";

// Hooks
import { useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {

    const userDataProvider = {}

    return (
        <UserContext.Provider value={userDataProvider}>
            {children}
        </UserContext.Provider>
    )
}