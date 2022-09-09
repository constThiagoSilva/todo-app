import { ReactNode, useState } from "react";
import { Content, Overlay } from "./styles";

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void
}

export const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <Content>
        <button onClick={onClose} className='close-modal-button'>x</button>
        <div className="body">{children}</div>
      </Content>
    </Overlay>
  );
};
