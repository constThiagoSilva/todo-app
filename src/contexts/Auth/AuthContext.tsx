import React, { createContext, ReactNode, SetStateAction, useEffect, useState } from "react";
import { IUser } from "../../interfaces/models/IUser";

export interface IAuthContext {
    logged: boolean;
    user: IUser | null;
    setUser: React.Dispatch<SetStateAction<IUser | null>>
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext<IAuthContext | null>(null)



export const AuthProvider = ({children}: AuthProviderProps) => {
    const [user, setUser] = useState<IUser | null>(null);

    useEffect(() => {
        const user = localStorage.getItem('user')

        if (user) setUser(JSON.parse(user))
        
    }, []);

    return (
        <AuthContext.Provider value={{logged: !!user, user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}
