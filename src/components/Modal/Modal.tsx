import { ReactNode } from "react";
import styles from "./styles.module.scss";
import { createPortal } from "react-dom";

interface ModalProps {
  children: ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  return createPortal(
    <div className={styles.wrapperModal}>
      <div className={styles.contentModal}> {children}</div>
    </div>,
    document.body
  );
};

export default Modal;
