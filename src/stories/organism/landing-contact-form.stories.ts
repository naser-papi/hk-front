import { Meta, StoryObj } from "@storybook/react";
import { LandingContactForm } from "@/components/organism";

const meta: Meta<typeof LandingContactForm> = {
    title: "Organism/LandingContactForm",
    component: LandingContactForm,
};
export default meta;
type Story = StoryObj<typeof LandingContactForm>;

export const Default: Story = {
    args: {},
};
