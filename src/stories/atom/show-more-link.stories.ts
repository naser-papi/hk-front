import { Meta, StoryObj } from "@storybook/react";
import { ShowMoreLink } from "@/components";
import face1 from "assets/show-more/face-1.svg";

const meta: Meta<typeof ShowMoreLink> = {
    title: "Atom/ShowMoreLink",
    component: ShowMoreLink,
};
export default meta;
type Story = StoryObj<typeof ShowMoreLink>;

export const Default: Story = {
    args: {
        label: "Show All",
        image: face1,
        href: "#",
    },
};
