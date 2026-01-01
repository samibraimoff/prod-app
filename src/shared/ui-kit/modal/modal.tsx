import { ReactNode, useRef, useState, useEffect, useCallback } from "react";
import styles from "./modal.module.scss";
import { cssClassNames } from "shared/helpers/class-names/css-class-names";
import { Portal } from "../portal/portal";

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const ANIMATION_DELAY = 300;

const Modal = (props: ModalProps) => {
  const { className, children, isOpen, onClose } = props;
  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

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
    [styles.isClosing]: isClosing
  };

  const onClickContent = (e: MouseEvent) => {
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

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <Portal elementId={"modal-root"}>
      <div data-testid={"modal"} className={cssClassNames(styles.modal, mods, [className])}>
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