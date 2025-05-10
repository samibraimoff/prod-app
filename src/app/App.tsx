import { AppRouter } from 'app/providers/router';
import { classNames } from 'shared/lib/class-names/class-names';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';
import { useTheme } from './providers/theme';
import './styles/index.scss';

export function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <div className="content">
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    );
}
