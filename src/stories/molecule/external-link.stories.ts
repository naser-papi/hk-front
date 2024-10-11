import { Meta, StoryObj } from "@storybook/react";
import { ExternalLink } from "@/components";
import logo from "assets/images/logo2.jpeg";
const meta: Meta<typeof ExternalLink> = {
    title: "Molecule/ExternalLink",
    component: ExternalLink,
};
export default meta;
type Story = StoryObj<typeof ExternalLink>;

export const Default: Story = {
    args: {
        logo: logo,
        title: "The Title Of the link that should describe it briefly",
        href: "#",
    },
};
