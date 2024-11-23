import { Meta, StoryObj } from "@storybook/react";
import { OpenLinkBox } from "@/components/atom";

const meta: Meta<typeof OpenLinkBox> = {
    title: "Atom/OpenLinkBox",
    component: OpenLinkBox,
};
export default meta;
type Story = StoryObj<typeof OpenLinkBox>;

export const Default: Story = {
    args: {
        title: "Go to Page",
        href: "#",
    },
};
