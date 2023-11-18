import { createContext, useContext } from 'react';

export const AuthContext = createContext({})

export function AuthProvider({ children }) {




    return (
        <AuthContext.Provider value={{name: 'Matheus'}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)

    return context
}