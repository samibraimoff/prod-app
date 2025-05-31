import { classNames } from 'shared/lib';
import { Modal } from 'shared/ui';

import { LoginForm } from '../login-form/login-form';
import classes from './login-modal.module.scss';

interface LoginModalProps {
    className?: string;
    isOpen?: boolean;
    onClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
  const { className, isOpen, onClose } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose} className={classNames(classes.loginModal, {}, [className])}>
      <LoginForm />
    </Modal>
  );
};
