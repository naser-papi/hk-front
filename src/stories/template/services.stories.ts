import { Meta, StoryObj } from "@storybook/react";
import { Services } from "@/components";

const meta: Meta<typeof Services> = {
    title: "Template/Services",
    component: Services,
};
export default meta;
type Story = StoryObj<typeof Services>;

export const Default: Story = {
    args: {},
};
