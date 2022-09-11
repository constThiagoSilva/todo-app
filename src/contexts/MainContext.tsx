import { createContext, ReactNode, SetStateAction, useState } from "react";
import { AuthProvider } from "./Auth/AuthContext";
import { ModalProvider } from "./Modal/ModalContext";
import { TasksProvider } from "./Tasks/TasksContext";

interface MainContextProps {
  children: ReactNode;
}

export const MainContext = ({ children }: MainContextProps) => {
  return (
    <AuthProvider>
      <TasksProvider>
        <ModalProvider>{children}</ModalProvider>
      </TasksProvider>
    </AuthProvider>
  );
};
