import { Meta, StoryObj } from "@storybook/react";
import { EventCardsContainer } from "@/components";

const meta: Meta<typeof EventCardsContainer> = {
    title: "Organism/EventCardsContainer",
    component: EventCardsContainer,
};
export default meta;
type Story = StoryObj<typeof EventCardsContainer>;

export const Default: Story = {
    args: {},
};
