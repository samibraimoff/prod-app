import { Suspense, useState } from "react";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/navbar";
import { Modal } from "shared/ui-kit";

import { useTheme } from "app/providers/theme";
import { cssClassNames } from "shared/helpers/class-names/css-class-names";
import { Sidebar } from "widgets/sidebar";

export const App = () => {
  const { theme } = useTheme();

  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={cssClassNames("app", {}, [theme])}>
      <Suspense fallback={""}>
        <Navbar />
        <button onClick={() => setIsOpen(true)}>open</button>
        <Modal isOpen={isOpen} onClose={onClose}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
          laudantium corporis libero nemo, repudiandae explicabo autem ipsam
          dolorum animi numquam nobis, dolores illum harum quasi in! Incidunt,
          nemo dolorem obcaecati quod ab eligendi facere, exercitationem maxime
          aperiam necessitatibus atque provident.
        </Modal>
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
