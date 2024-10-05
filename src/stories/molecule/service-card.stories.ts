import { Meta, StoryObj } from "@storybook/react";
import { ServiceCard } from "@/components";
import person from "assets/images/person.jpg";

const meta: Meta<typeof ServiceCard> = {
    title: "Molecule/ServiceCard",
    component: ServiceCard,
};
export default meta;
type Story = StoryObj<typeof ServiceCard>;

export const Small: Story = {
    args: {
        image: person,
        title: "Service Title",
        description:
            "some short description about this service that should explain the main point of this service.",
        href: "#",
        size: "small",
    },
};
