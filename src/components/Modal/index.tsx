import { ReactNode, useState } from "react";
import { Content, Overlay } from "./styles";

interface ModalProps {
  children: ReactNode;
  onClose: () => void
}

export const Modal = ({ children, onClose }: ModalProps) => {

  return (
    <Overlay>
      <Content>
        <button onClick={onClose} className='close-modal-button'>x</button>
        <div className="body">{children}</div>
      </Content>
    </Overlay>
  );
};
