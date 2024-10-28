import { Meta, StoryObj } from "@storybook/react";
import { Hero } from "@/components";

const meta: Meta<typeof Hero> = {
    title: "Template/Hero",
    component: Hero,
};
export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {
    args: {},
};
