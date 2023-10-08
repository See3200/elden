import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonSize, ButtonTheme } from "./Button";
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
    theme: ButtonTheme.CLEAR
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
    theme: ButtonTheme.CLEAR,
    className: "",
    children: "Clear",
  },
};

export const ClearInverted: Story = {
  args: {
    theme: ButtonTheme.CLEAR_INVERTED,
    className: "",
    children: "Clear inverted",
  },
};

export const Outlined: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    className: "",
    children: "Outlined",
  },
};

export const OutlinedSizeL: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    className: "",
    children: "Outlined",
    size: ButtonSize.L,
  },
};

export const OutlinedSizeXL: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    className: "",
    children: "Outlined",
    size: ButtonSize.XL,
  },
};

export const OutlinedDark: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    className: "",
    children: "Outlined",
  },
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundTheme: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND,
    className: "",
    children: "Background",
  },
};

export const BackgroundInvertedTheme: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    className: "",
    children: "Background",
  },
};

export const Square: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    className: "",
    children: ">",
    square: true,
  },
};

export const SquareSizeL: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    className: "",
    children: ">",
    square: true,
    size: ButtonSize.L,
  },
};

export const SquareSizeXL: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    className: "",
    children: ">",
    square: true,
    size: ButtonSize.XL,
  },
};

export const Disabled: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    className: "",
    children: ">",
    disabled: true,
  },
};