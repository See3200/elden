import type { Meta, StoryObj } from "@storybook/react";
import { ErrorPage } from "./ErrorPage";
import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "widgets/ErrorPage",
  component: ErrorPage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ErrorPage>;

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