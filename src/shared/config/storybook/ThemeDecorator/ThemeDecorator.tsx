import { Theme, ThemeProvider } from "app/providers/ThemeProvider";

/* eslint-disable  @typescript-eslint/no-explicit-any */
export const ThemeDecorator = (theme: Theme) => (Story: any) => {
  return (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <Story />
      </div>
    </ThemeProvider>
  )
};