import { Meta, StoryObj } from "@storybook/react";
import { Events } from "@/components";

const meta: Meta<typeof Events> = {
    title: "Template/Events",
    component: Events,
};
export default meta;
type Story = StoryObj<typeof Events>;

export const Default: Story = {
    args: {},
};
