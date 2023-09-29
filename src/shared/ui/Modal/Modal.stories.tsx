import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "shared/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isOpen: true,
    children: 
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam."
  },
};

export const Dark: Story = {
  args: {
    isOpen: true,
    children: 
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam"
  },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
