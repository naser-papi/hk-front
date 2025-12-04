import { Meta, StoryObj } from "@storybook/react";
import { MenuLink } from "@/components/atom";
import { FaHandshakeAngle } from "react-icons/fa6";

const meta: Meta<typeof MenuLink> = {
    title: "Atom/MenuLink",
    component: MenuLink,
};
export default meta;
type Story = StoryObj<typeof MenuLink>;

export const Default: Story = {
    args: {
        label: "Services",
        icon: FaHandshakeAngle,
        href: "#",
    },
};
