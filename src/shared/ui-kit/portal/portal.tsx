import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children?: ReactNode;
  elementId?: string;
}

const Portal = (props: PortalProps) => {
  const { children, elementId } = props;
  const element = document.getElementById(elementId) || document.body;
  return createPortal(children, element);
};

Portal.displayName = "Portal";
export { Portal };
