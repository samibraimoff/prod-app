import "./loader.scss";

import { cssClassNames } from "shared/helpers/class-names/css-class-names";

interface LoaderProps {
  className?: string;
}

const Loader = (props: LoaderProps) => {
  const { className } = props;
  return (
    <div
      data-testid={"loader"}
      className={cssClassNames("lds-roller", {}, [className])}
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

Loader.displayName = "Loader";
export { Loader };
