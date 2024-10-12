import { Meta, StoryObj } from "@storybook/react";
import { MainMenu } from "@/components";

const meta: Meta<typeof MainMenu> = {
    title: "Organism/MainMenu",
    component: MainMenu,
};
export default meta;
type Story = StoryObj<typeof MainMenu>;

export const Default: Story = {
    args: {},
};
