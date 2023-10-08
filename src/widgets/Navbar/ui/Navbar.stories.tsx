import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./Navbar";
import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
  title: "widgets/Navbar",
  component: Navbar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    className: "",
  },
};
Light.decorators = [StoreDecorator({})]

export const Dark: Story = {
  args: {
    className: "",
  },
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const AuthNavbar: Story = {
  args: {
    className: "",
  },
};
AuthNavbar.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ user: {authData: {}} })];