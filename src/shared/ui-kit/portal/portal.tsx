import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children?: ReactNode;
  elementId?: string;
}

export const Portal = (props: PortalProps) => {
  const { children, elementId } = props;
  const element = document.getElementById(elementId) || document.body;
  return createPortal(children, element);
};
