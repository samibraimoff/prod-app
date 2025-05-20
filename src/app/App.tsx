import './styles/index.scss';

import { AppRouter } from 'app/providers/router';
import { useState } from 'react';
import { classNames } from 'shared/lib/class-names/class-names';
import { Modal } from 'shared/ui';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';

import { useTheme } from './providers/theme';

export function App() {
  const { theme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <button type="button" onClick={() => setIsModalOpen(true)}>toggle</button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h1>this is modal this is modal this is modal this is modal this is modal this is modal</h1>
      </Modal>
      <div className="content">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
}
