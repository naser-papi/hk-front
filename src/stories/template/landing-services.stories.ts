import { Meta, StoryObj } from "@storybook/react";
import { LandingServices } from "@/components/template";

const meta: Meta<typeof LandingServices> = {
    title: "Template/Services",
    component: LandingServices,
};
export default meta;
type Story = StoryObj<typeof LandingServices>;

export const Default: Story = {
    args: {},
};
