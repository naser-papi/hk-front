import { Meta, StoryObj } from "@storybook/react";
import { ServiceCard } from "@/components";

const meta: Meta<typeof ServiceCard> = {
    title: "Molecule/ServiceCard",
    component: ServiceCard,
};
export default meta;
type Story = StoryObj<typeof ServiceCard>;

export const Default: Story = {
    args: {
        ikUrl: "https://ik.imagekit.io/tdvmspnmgu/cms/startup_990219a35e_Mjvqi-sZv.png?updatedAt=1729258448781",
        title: "Service Title",
        description:
            "some short description about this service that should explain the main point of this service.",
        href: "#",
        size: "small",
    },
};
