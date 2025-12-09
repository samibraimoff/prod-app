import { Loader } from "shared/ui-kit/loader";
import styles from "./page-loader.module.scss";

export const PageLoader = () => {
  return (
    <div className={styles.pageLoader}>
      <Loader />
    </div>
  );
};
