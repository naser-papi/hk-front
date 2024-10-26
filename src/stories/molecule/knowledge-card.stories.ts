import { Meta, StoryObj } from "@storybook/react";
import { KnowledgeCard } from "@/components";

const meta: Meta<typeof KnowledgeCard> = {
    title: "Molecule/KnowledgeCard",
    component: KnowledgeCard,
};
export default meta;
type Story = StoryObj<typeof KnowledgeCard>;

export const Small: Story = {
    args: {
        ikUrl: "https://ik.imagekit.io/tdvmspnmgu/cms/transportation_11ca20d886_qvGoETFeT.webp?updatedAt=1729344423860",
        title: "Service Title",
        description:
            "some short description about this service that should explain the main point of this service.",
        href: "#",
        size: "small",
    },
};
