import { Meta, StoryObj } from "@storybook/react";
import { LandingBannerCarousel } from "@/components/organism";

const meta: Meta<typeof LandingBannerCarousel> = {
    title: "Organism/LandingBannerCarousel",
    component: LandingBannerCarousel,
};
export default meta;
type Story = StoryObj<typeof LandingBannerCarousel>;

export const Default: Story = {
    args: {},
};
