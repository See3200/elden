import type { Meta, StoryObj } from "@storybook/react";
import { Button, ThemeButton } from "./Button";
import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "shared/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
/*   argTypes: {
    backgroundColor: { control: "color" },
    className: "",
    theme: ThemeButton.CLEAR
  }, */
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    className: "",
    children: "Primary",
  },
};

export const Clear: Story = {
  args: {
    theme: ThemeButton.CLEAR,
    className: "",
    children: "Clear",
  },
};

export const Outlined: Story = {
  args: {
    theme: ThemeButton.OUTLINE,
    className: "",
    children: "Outlined",
  },
};

export const OutlinedDark: Story = {
  args: {
    theme: ThemeButton.OUTLINE,
    className: "",
    children: "Outlined",
  },
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];