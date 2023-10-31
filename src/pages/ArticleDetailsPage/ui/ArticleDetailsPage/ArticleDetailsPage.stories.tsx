import type { Meta, StoryObj } from "@storybook/react";
import ArticleDetailsPage from "./ArticleDetailsPage";
import "app/styles/index.scss";

const meta = {
  title: "pages/ArticleDetailsPage",
  component: ArticleDetailsPage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ArticleDetailsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    className: "",
  },
};