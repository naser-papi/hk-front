import { Meta, StoryObj } from "@storybook/react";
import { LinkCardsContainer } from "@/components";

const meta: Meta<typeof LinkCardsContainer> = {
    title: "Organism/LinkCardsContainer",
    component: LinkCardsContainer,
};
export default meta;
type Story = StoryObj<typeof LinkCardsContainer>;

export const Default: Story = {
    args: {},
};
