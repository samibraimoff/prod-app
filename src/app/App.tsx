import { Suspense } from 'react';
import { useTheme } from 'app/providers/theme';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/navbar';
import './styles/index.scss';
import { Sidebar } from 'widgets/sidebar';
import { AppRouter } from './providers/router';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback='loading...'>
        <Navbar />
        <div className='content'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
