import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children?: ReactNode;
  elementId?: HTMLElement;
}

export const Portal = (props: PortalProps) => {
  const { children, elementId = document.body } = props;

  return createPortal(children, elementId);
};
