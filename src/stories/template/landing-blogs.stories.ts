import { Meta, StoryObj } from "@storybook/react";
import { LandingBlogs } from "@/components/template";

const meta: Meta<typeof LandingBlogs> = {
    title: "Template/LandingBlogs",
    component: LandingBlogs,
};
export default meta;
type Story = StoryObj<typeof LandingBlogs>;

export const Default: Story = {
    args: {},
};
