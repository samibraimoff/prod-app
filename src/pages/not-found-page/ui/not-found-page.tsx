import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/classnames';
import styles from "./not-found-page.module.scss"
import { AppLink } from 'shared/ui';


export const NotFoundPage = () => {
    const { t } = useTranslation("translation");
    return (
        <div className={classNames(styles.notFoundPage, {}, [])}>
            <h1>404</h1>
            <p>{t("pageNotFound")}</p>
            <AppLink to={"/"}>{t("goBackToMain")}</AppLink>
        </div>
    )
}