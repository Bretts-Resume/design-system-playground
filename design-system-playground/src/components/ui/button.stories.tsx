import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  args: { children: "Button" },
};
export default meta;

type Story = StoryObj<typeof Button>;
export const Default: Story = {};
export const Secondary: Story = { args: { variant: "secondary" } };
export const Destructive: Story = { args: { variant: "destructive" } };
export const Ghost: Story = { args: { variant: "ghost" } };
export const Large: Story = { args: { size: "lg" } };
