import { FC, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/classnames';
import { AppLink, AppLinkTheme } from 'shared/ui';
import styles from './navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation(['about', 'main']);

    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <div className={classNames(styles.links, {}, [])}>
                <AppLink
                    to="/"
                    theme={AppLinkTheme.SECONDARY}
                    className={classNames(styles.mainLink, {}, [])}
                >
                    {t('main', { ns: 'main' })}
                </AppLink>
                <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
                    {t('about')}
                </AppLink>
            </div>
        </div>
    );
};
