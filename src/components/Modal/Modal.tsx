import React from "react";
import { ModalProps } from "../../types/modal";
import styles from "./Modal.module.scss";

export default function Modal({
  open = false,
  onClose,
  children,
  ...props
}: ModalProps) {
  if (!open) return null;
  return (
    <div className={styles.modalBackground} onClick={onClose}>
      <div className={styles.modalDialog} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
