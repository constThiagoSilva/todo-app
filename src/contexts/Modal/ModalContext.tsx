import { createContext, ReactNode, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";

export interface IModelContext {
  onOpen: () => void;
  onClose: () => void;
}

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalContext = createContext<IModelContext | null>(null);

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const navigate = useNavigate();

  const onOpen = () => navigate("/main/tasks/add");
  const onClose = () => navigate("/main/tasks");

  return (
    <ModalContext.Provider value={{ onClose, onOpen }}>
      {children}
    </ModalContext.Provider>
  );
};
