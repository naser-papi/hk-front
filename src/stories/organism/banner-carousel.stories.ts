import { Meta, StoryObj } from "@storybook/react";
import { BannerCarousel } from "@/components/organism";

const meta: Meta<typeof BannerCarousel> = {
    title: "Organism/BannerCarousel",
    component: BannerCarousel,
};
export default meta;
type Story = StoryObj<typeof BannerCarousel>;

export const Default: Story = {
    args: {},
};
