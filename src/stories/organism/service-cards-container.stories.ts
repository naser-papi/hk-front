import { Meta, StoryObj } from "@storybook/react";
import { ServiceCardContainer } from "@/components/organism";

const meta: Meta<typeof ServiceCardContainer> = {
    title: "Organism/ServiceCardContainer",
    component: ServiceCardContainer,
};
export default meta;
type Story = StoryObj<typeof ServiceCardContainer>;

export const Default: Story = {
    args: {},
};
