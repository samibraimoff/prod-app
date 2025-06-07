import { Suspense } from 'react';
import { classNames } from 'shared/lib';
import { Loader, Modal } from 'shared/ui';

import { LoginFormLazy } from '../login-form/login-form-lazy';

interface LoginModalProps {
    className?: string;
    isOpen?: boolean;
    onClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
  const { className, isOpen, onClose } = props;
  return (
    <Modal isOpen={isOpen} lazy onClose={onClose} className={classNames('', {}, [className])}>
      <Suspense fallback={<Loader />}>
        <LoginFormLazy />
      </Suspense>
    </Modal>
  );
};
