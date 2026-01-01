import { cssClassNames } from "shared/helpers/class-names/css-class-names";
import styles from "./user.module.scss";

interface UserProps {
  className?: string;
}

export const User = (props: UserProps) => {
  const { className } = props;
  return (
    <div className={cssClassNames(styles.user, {}, [className])}>
      <h1>user</h1>
    </div>
  );
};