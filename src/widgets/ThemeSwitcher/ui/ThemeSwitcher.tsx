import { FC } from "react";
import { useTheme } from "app/providers/ThemeProvider";
import LightThemeIcon from "shared/assets/icons/theme-light.svg";
import DarkThemeIcon from "shared/assets/icons/theme-dark.svg";
import { Theme } from "app/providers/ThemeProvider";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
};

export const ThemeSwitcher: FC<ThemeSwitcherProps> = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <Button 
      theme={ButtonTheme.CLEAR}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkThemeIcon /> : <LightThemeIcon />}
    </Button>
  );
};