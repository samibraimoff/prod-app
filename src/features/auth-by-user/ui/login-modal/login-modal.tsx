import { classNames } from 'shared/lib';
import { Modal } from 'shared/ui';

import { LoginForm } from '../login-form/login-form';

interface LoginModalProps {
    className?: string;
    isOpen?: boolean;
    onClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
  const { className, isOpen, onClose } = props;
  return (
    <Modal isOpen={isOpen} lazy onClose={onClose} className={classNames('', {}, [className])}>
      <LoginForm />
    </Modal>
  );
};
