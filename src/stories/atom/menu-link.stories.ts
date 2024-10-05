import { Meta, StoryObj } from "@storybook/react";
import { MenuLink } from "@/components";
import { faHandshakeAngle } from "@awesome.me/kit-026a927a83/icons/classic/solid";

const meta: Meta<typeof MenuLink> = {
    title: "Atom/MenuLink",
    component: MenuLink,
};
export default meta;
type Story = StoryObj<typeof MenuLink>;

export const Default: Story = {
    args: {
        label: "Services",
        icon: faHandshakeAngle,
        href: "#",
    },
};
