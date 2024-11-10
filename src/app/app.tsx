import { useTheme } from 'app/providers/theme';
import { classNames } from 'shared/lib/helpers/classnames';
import './styles/index.scss';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/navbar';
import { SidebarMain } from 'widgets/sidebar';
import { Suspense, useEffect } from 'react';

export function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="loading...">
                <Navbar />
                <div className="content-page">
                    <SidebarMain />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}
