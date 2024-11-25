import { Meta, StoryObj } from "@storybook/react";
import { BlogDetailBanner } from "@/components/organism";

const meta: Meta<typeof BlogDetailBanner> = {
    title: "Organism/BlogDetailBanner",
    component: BlogDetailBanner,
};
export default meta;
type Story = StoryObj<typeof BlogDetailBanner>;

export const Default: Story = {
    args: {},
};
