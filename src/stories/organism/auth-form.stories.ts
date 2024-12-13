import { Meta, StoryObj } from "@storybook/react";
import { AuthForm } from "@/components/organism";

const meta: Meta<typeof AuthForm> = {
    title: "Organism/AuthForm",
    component: AuthForm,
};
export default meta;
type Story = StoryObj<typeof AuthForm>;

export const Default: Story = {
    args: {},
};
