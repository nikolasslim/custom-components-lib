import React from "react";
import { ModalProps } from "../../types/modal";
import "./Modal.css";

export default function Modal({ open = false, onClose, children }: ModalProps) {
  if (!open) return null;
  return (
    <div className="custom-modal-overlay open" onClick={onClose}>
      <div
        className="custom-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
