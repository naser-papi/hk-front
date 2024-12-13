import { Meta, StoryObj } from "@storybook/react";
import { AuthHeader } from "@/components/organism";

const meta: Meta<typeof AuthHeader> = {
    title: "Organism/AuthHeader",
    component: AuthHeader,
};
export default meta;
type Story = StoryObj<typeof AuthHeader>;

export const Default: Story = {
    args: {},
};
