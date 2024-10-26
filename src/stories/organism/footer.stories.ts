import { Meta, StoryObj } from "@storybook/react";
import { Footer } from "@/components";

const meta: Meta<typeof Footer> = {
    title: "Organism/Footer",
    component: Footer,
};
export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
    args: {},
};
