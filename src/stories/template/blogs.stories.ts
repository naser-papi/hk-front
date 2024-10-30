import { Meta, StoryObj } from "@storybook/react";
import { Blogs } from "@/components";

const meta: Meta<typeof Blogs> = {
    title: "Template/Blogs",
    component: Blogs,
};
export default meta;
type Story = StoryObj<typeof Blogs>;

export const Default: Story = {
    args: {},
};
