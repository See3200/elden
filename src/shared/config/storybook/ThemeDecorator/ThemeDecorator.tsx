import { Theme } from "app/providers/ThemeProvider";

/* eslint-disable  @typescript-eslint/no-explicit-any */
export const ThemeDecorator = (theme: Theme) => (Story: any) => {
  return (
    <div className={`app ${theme}`}>
      <Story />
    </div>
  )
};