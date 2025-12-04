import './Modal.css';
export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    size?: 'small' | 'medium' | 'large' | 'fullscreen';
    closeOnBackdrop?: boolean;
    className?: string;
}
declare const Modal: import("react").NamedExoticComponent<ModalProps>;
export default Modal;
