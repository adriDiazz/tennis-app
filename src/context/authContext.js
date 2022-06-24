import React, {createContext, useState} from "react";

const AuthContext = createContext();


export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const values = {
        isAuthenticated,
        setIsAuthenticated
    }

    return (
        <AuthContext.Provider
          value={values}
        >
          {children}
        </AuthContext.Provider>
      );
}

export default AuthContext;