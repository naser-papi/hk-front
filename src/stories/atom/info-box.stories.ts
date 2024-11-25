import { Meta, StoryObj } from "@storybook/react";
import { InfoBox } from "@/components/atom";

const meta: Meta<typeof InfoBox> = {
    title: "Atom/InfoBox",
    component: InfoBox,
};
export default meta;
type Story = StoryObj<typeof InfoBox>;

export const Default: Story = {
    args: {
        label: "Read Time",
        text: "5 min",
    },
};
