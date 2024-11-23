import { Meta, StoryObj } from "@storybook/react";
import { BlogBannerCarousel } from "@/components/organism";

const meta: Meta<typeof BlogBannerCarousel> = {
    title: "Organism/BlogBannerCarousel",
    component: BlogBannerCarousel,
};
export default meta;
type Story = StoryObj<typeof BlogBannerCarousel>;

export const Default: Story = {
    args: {},
};
