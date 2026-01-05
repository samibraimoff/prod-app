import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { cssClassNames } from "shared/helpers/class-names/css-class-names";

import { Portal } from "../portal/portal";
import styles from "./modal.module.scss";

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  lazy?: boolean;
  onClose?: () => void;
}

const ANIMATION_DELAY = 300;

const Modal = (props: ModalProps) => {
  const { className, children, isOpen, lazy, onClose } = props;
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const onCloseHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const mods = {
    [styles.opened]: isOpen,
    [styles.isClosing]: isClosing,
  };

  const onClickContent = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onCloseHandler();
      }
    },
    [onCloseHandler]
  );

  useEffect(() => {
    if (!isOpen) return;

    window.addEventListener("keydown", onKeyDown);
    return () => {
      timerRef.current && clearTimeout(timerRef.current);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  if (!isOpen && !isClosing) return null;

  if (lazy && !isMounted) return null;

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <Portal elementId={"modal-root"}>
      <div
        data-testid={"modal"}
        className={cssClassNames(styles.modal, mods, [className])}
      >
        <div className={styles.overlay} onClick={onCloseHandler}>
          <div className={styles.content} onClick={onClickContent}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

Modal.displayName = "Modal";
export { Modal };
