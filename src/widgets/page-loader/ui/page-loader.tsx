import { Loader } from "shared/ui-kit";
import styles from "./page-loader.module.scss";

export const PageLoader = () => {
  return (
    <div data-testid="page-loader" className={styles.pageLoader}>
      <Loader />
    </div>
  );
};
