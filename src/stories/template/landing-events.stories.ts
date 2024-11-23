import { Meta, StoryObj } from "@storybook/react";
import { LandingEvents } from "@/components/template";

const meta: Meta<typeof LandingEvents> = {
    title: "Template/Events",
    component: LandingEvents,
};
export default meta;
type Story = StoryObj<typeof LandingEvents>;

export const Default: Story = {
    args: {},
};
