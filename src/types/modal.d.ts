export interface ModalProps {
  open?: boolean;
  onClose?: () => void;
  children?: ReactNode;
}

export default function Modal(props: ModalProps): import("react").JSX.Element;
export {};
