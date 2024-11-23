import { Meta, StoryObj } from "@storybook/react";
import { LinkIcon } from "@/components/atom";
import {
    faTelegram,
    faWhatsapp,
} from "@awesome.me/kit-8b348a8267/icons/classic/brands";

const meta: Meta<typeof LinkIcon> = {
    title: "Atom/LinkIcon",
    component: LinkIcon,
};
export default meta;
type Story = StoryObj<typeof LinkIcon>;

export const Primary: Story = {
    args: {
        href: "#",
        icon: faWhatsapp,
    },
};
export const Secondary: Story = {
    args: {
        href: "#",
        icon: faTelegram,
        intend: "secondary",
    },
};
