import { FC } from "react";
import { useTheme } from "app/providers/ThemeProvider";
import LightThemeIcon from "shared/assets/icons/light-theme.svg";
import DarkThemeIcon from "shared/assets/icons/dark-theme.svg";
import { Theme } from "app/providers/ThemeProvider";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
};

export const ThemeSwitcher: FC<ThemeSwitcherProps> = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <Button 
      theme={ThemeButton.CLEAR}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkThemeIcon /> : <LightThemeIcon />}
    </Button>
  );
};