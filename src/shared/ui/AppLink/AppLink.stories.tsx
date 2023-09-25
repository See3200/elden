import type { Meta, StoryObj } from "@storybook/react";
import { AppLink, AppLinkTheme } from "./AppLink";
import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "shared/AppLink",
  component: AppLink,
  parameters: {
    layout: "centered",
  },
  args: {
    to: "/",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Primary",
    theme: AppLinkTheme.PRIMARY
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    theme: AppLinkTheme.SECONDARY
  },
};

export const PrimaryDark: Story = {
  args: {
    children: "Primary Dark",
    theme: AppLinkTheme.PRIMARY
  },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark: Story = {
  args: {
    children: "Secondary Dark",
    theme: AppLinkTheme.SECONDARY
  },
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];