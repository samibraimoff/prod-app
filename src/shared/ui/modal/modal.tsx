import React, {
  ReactNode, useCallback,
  useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib';
import { Portal } from 'shared/ui';

import classes from './modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen: boolean;
    onClose: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 500;

export const Modal = (props: ModalProps) => {
  const {
    className, children, isOpen, onClose, lazy,
  } = props;
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
    return () => {
      setIsMounted(false);
    };
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        setIsClosing(false);
        onClose();
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      handleClose();
    }
  }, [handleClose]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  const handleOnContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const mods: Record<string, boolean> = {
    [classes.opened]: isOpen,
    [classes.closed]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(classes.modal, mods, [className])}>
        <div className={classes.overlay} onClick={handleClose}>
          <div className={classes.content} onClick={handleOnContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
