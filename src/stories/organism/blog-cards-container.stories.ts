import { Meta, StoryObj } from "@storybook/react";
import { BlogCardsContainer } from "@/components";

const meta: Meta<typeof BlogCardsContainer> = {
    title: "Organism/BlogCardsContainer",
    component: BlogCardsContainer,
};
export default meta;
type Story = StoryObj<typeof BlogCardsContainer>;

export const Default: Story = {
    args: {},
};
