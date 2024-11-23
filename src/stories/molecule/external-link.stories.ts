import { Meta, StoryObj } from "@storybook/react";
import { ExternalLink } from "@/components/molecule";

const meta: Meta<typeof ExternalLink> = {
    title: "Molecule/ExternalLink",
    component: ExternalLink,
};
export default meta;
type Story = StoryObj<typeof ExternalLink>;

export const Default: Story = {
    args: {
        logo: "https://ik.imagekit.io/tdvmspnmgu/temp/startup_7a96b67985_80lnoF5Hh.png",
        title: "The Title Of the link that should describe it briefly",
        href: "#",
    },
};
