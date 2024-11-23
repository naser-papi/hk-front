import { Meta, StoryObj } from "@storybook/react";
import { LandingHero } from "@/components/template";

const meta: Meta<typeof LandingHero> = {
    title: "Template/Hero",
    component: LandingHero,
};
export default meta;
type Story = StoryObj<typeof LandingHero>;

export const Default: Story = {
    args: {},
};
