import { Avatar } from "./Avatar";
import AvatarImg from "./storybook.jpg";
import type { Meta, StoryObj } from "@storybook/react";
import "app/styles/index.scss";

const meta = {
  title: "shared/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: 150,
    src: AvatarImg,
  },
};

export const Small: Story = {
  args: {
    size: 50,
    src: AvatarImg,
  },
};