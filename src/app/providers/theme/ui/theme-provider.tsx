import { FC, useMemo, useState } from "react";
import {
  ThemeContext,
  Theme,
  LOCAL_STORAGE_THEME_KEY,
} from "../lib/theme-context";

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultValues = useMemo(
    () => ({ theme: theme, setTheme: setTheme }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={defaultValues}>
      {children}
    </ThemeContext.Provider>
  );
};
