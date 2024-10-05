import { Meta, StoryObj } from "@storybook/react";
import { KnowledgeCard } from "@/components";
import sample from "assets/images/sample.webp";

const meta: Meta<typeof KnowledgeCard> = {
    title: "Molecule/KnowledgeCard",
    component: KnowledgeCard,
};
export default meta;
type Story = StoryObj<typeof KnowledgeCard>;

export const Small: Story = {
    args: {
        image: sample,
        title: "Service Title",
        description:
            "some short description about this service that should explain the main point of this service.",
        href: "#",
        size: "small",
    },
};
