import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/helpers/classnames"
import styles from "./page-error.module.scss"
import { Button } from "shared/ui";

interface PageErrorProps {
    className?: string;
}

export const PageError = (props: PageErrorProps) => {
    const { t } = useTranslation();
    const { className } = props;

    const reloadPage = () => {
        location.reload();
    }

    return (
        <div className={classNames(styles.pageError, {}, [className])}>
            <p>{t("pageError")}</p>
            <Button onClick={reloadPage}>{t("updatePage")}</Button>
        </div>
    )
}