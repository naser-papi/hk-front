import { Meta, StoryObj } from "@storybook/react";
import { ServicesVideo } from "@/components/organism";

const meta: Meta<typeof ServicesVideo> = {
    title: "Organism/ServicesVideo",
    component: ServicesVideo,
};
export default meta;
type Story = StoryObj<typeof ServicesVideo>;

export const Default: Story = {
    args: {},
};
