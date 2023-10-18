import { CurrencySelect } from "./CurrencySelect";
import type { Meta, StoryObj } from "@storybook/react";
import "app/styles/index.scss";

const meta = {
  title: "entities/CurrencySelect",
  component: CurrencySelect,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CurrencySelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};