import React, { createContext, ReactNode, SetStateAction, useState } from "react";
import { IUser } from "../../interfaces/models/IUser";

export interface IAuthContext {
    user: IUser | null;
    setUser: React.Dispatch<SetStateAction<IUser | null>>
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext<IAuthContext | null>(null)



export const AuthProvider = ({children}: AuthProviderProps) => {
    const [user, setUser] = useState<IUser | null>(null);

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}
