import { Suspense, useEffect } from 'react';
import { useTheme } from 'app/providers/theme';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';
import { AppRouter } from './providers/router';
import './styles/index.scss';

export const App = () => {
  const { theme } = useTheme();

  useEffect(() => {
    throw new Error('error');
  }, []);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback='loading..'>
        <Navbar />
        <div className='content'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
