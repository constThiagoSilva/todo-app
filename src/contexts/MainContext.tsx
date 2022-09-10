import { createContext, ReactNode, SetStateAction, useState } from "react";
import { AuthProvider } from "./Auth/AuthContext";
import { ModalProvider } from "./Modal/ModalContext";

interface MainContextProps {
  children: ReactNode;
}

export const MainContext = ({ children }: MainContextProps) => {
  return (
    <AuthProvider>
      <ModalProvider>{children}</ModalProvider>
    </AuthProvider>
  );
};
