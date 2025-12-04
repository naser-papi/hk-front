import { Meta, StoryObj } from "@storybook/react";
import { LinkIcon } from "@/components/atom";
import { FaTelegram, FaWhatsapp } from "react-icons/fa6";

const meta: Meta<typeof LinkIcon> = {
    title: "Atom/LinkIcon",
    component: LinkIcon,
};
export default meta;
type Story = StoryObj<typeof LinkIcon>;

export const Primary: Story = {
    args: {
        href: "#",
        icon: FaWhatsapp,
    },
};
export const Secondary: Story = {
    args: {
        href: "#",
        icon: FaTelegram,
        intend: "secondary",
    },
};
