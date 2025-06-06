import { AppRouter } from 'app/providers/router';
import { userActions } from 'entities/user';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { classNames } from 'shared/lib';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';

import { useTheme } from './providers/theme';

export function App() {
  const { theme } = useTheme();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

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
