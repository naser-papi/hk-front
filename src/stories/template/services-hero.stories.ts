import { Meta, StoryObj } from "@storybook/react";
import { ServicesHero } from "@/components/template";

const meta: Meta<typeof ServicesHero> = {
    title: "Template/ServicesHero",
    component: ServicesHero,
};
export default meta;
type Story = StoryObj<typeof ServicesHero>;

export const Default: Story = {
    args: {},
};
