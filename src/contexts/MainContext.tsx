import { createContext, ReactNode, SetStateAction, useState } from "react";
import { ModalProvider } from "./Modal/ModalContext";

interface MainContextProps {
    children: ReactNode
}

export const MainContext = ({children}: MainContextProps) => {
    return (
        <ModalProvider>
            {children}
        </ModalProvider>
    )
}