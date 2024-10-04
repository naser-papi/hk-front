import { Meta, StoryObj } from "@storybook/react";
import { LinkButton } from "@/components";
const meta: Meta<typeof LinkButton> = {
    title: "Atom/LinkButton",
    component: LinkButton,
};
export default meta;
type Story = StoryObj<typeof LinkButton>;

export const Default: Story = {
    args: {
        label: "Detail...",
        href: "#",
    },
};
