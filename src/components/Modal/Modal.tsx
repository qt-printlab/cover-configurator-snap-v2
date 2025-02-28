import { CSSProperties, ReactNode } from "react";
import styles from "./styles.module.scss";
import { createPortal } from "react-dom";

interface ModalProps {
  children: ReactNode;
  modalStyle?: CSSProperties;
}

const Modal = ({ children, modalStyle }: ModalProps) => {
  return createPortal(
    <div className={styles.wrapperModal} style={{ ...modalStyle }}>
      <div className={styles.contentModal}> {children}</div>
    </div>,
    document.body
  );
};

export default Modal;
