import { Meta, StoryObj } from "@storybook/react";
import { NlLogo } from "@/components/atom";

const meta: Meta<typeof NlLogo> = {
    title: "Atom/Logo",
    component: NlLogo,
};
export default meta;
type Story = StoryObj<typeof NlLogo>;

export const Default: Story = {
    args: {
        type: "default",
    },
};

export const Flag: Story = {
    args: {
        type: "flag",
    },
};
