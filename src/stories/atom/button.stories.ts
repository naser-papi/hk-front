import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/atom";

const meta: Meta<typeof Button> = {
    title: "Atom/Button",
    component: Button,
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        label: "Read More",
        intend: "primary",
    },
};
export const Secondary: Story = {
    args: {
        label: "Read More",
        intend: "secondary",
    },
};

export const FilterButton: Story = {
    args: {
        label: "Filter",
        intend: "filter",
        selected: false,
    },
};
