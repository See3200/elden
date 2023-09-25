import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./Sidebar";
import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "widgets/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    className: "",
    children: "Primary",
  },
};

export const Dark: Story = {
  args: {
    className: "",
    children: "Primary",
  },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];