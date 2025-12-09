import { cssClassNames } from "shared/helpers/class-names/css-class-names";
import "./loader.scss";

interface LoaderProps {
  className?: string;
}

export const Loader = (props: LoaderProps) => {
  const { className } = props;
  return (
    <div className={cssClassNames("lds-roller", {}, [className])}>
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
