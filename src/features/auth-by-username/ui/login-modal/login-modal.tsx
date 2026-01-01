import { LoginForm } from "../login-form/login-form";
import { Modal } from "shared/ui-kit";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
  const { isOpen, onClose } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose} lazy>
      <LoginForm />
    </Modal>
  );
};
