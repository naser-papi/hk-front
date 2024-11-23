import { Meta, StoryObj } from "@storybook/react";
import { KnowledgeCard } from "@/components/molecule";

const meta: Meta<typeof KnowledgeCard> = {
    title: "Molecule/KnowledgeCard",
    component: KnowledgeCard,
    decorators: [
        (Story) => (
            <div style={{ width: "1260px" }}>
                <Story />
            </div>
        ),
    ],
};
export default meta;
type Story = StoryObj<typeof KnowledgeCard>;

export const Small: Story = {
    args: {
        ikUrl: "https://ik.imagekit.io/tdvmspnmgu/temp/transportation.webp?updatedAt=1731437370476",
        title: "Service Title",
        description:
            "some short description about this service that should explain the main point of this service.",
        href: "#",
    },
};
