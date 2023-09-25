import type { Meta, StoryObj } from "@storybook/react";
import { Loader } from "./Loader";
import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "shared/Loader",
  component: Loader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    className: "",
  },
};

export const Dark: Story = {
  args: {
    className: "",
  },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];