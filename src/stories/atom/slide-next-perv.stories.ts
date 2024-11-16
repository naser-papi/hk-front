import { Meta, StoryObj } from "@storybook/react";
import { SlidePervNext } from "@/components/atom";

const meta: Meta<typeof SlidePervNext> = {
    title: "Atom/SlidePervNext",
    component: SlidePervNext,
};
export default meta;
type Story = StoryObj<typeof SlidePervNext>;

export const Default: Story = {
    args: {
        mode: "both",
        leftClick: () => alert("Left clicked"),
        rightClick: () => alert("Right clicked"),
    },
};

export const LeftOnly: Story = {
    args: {
        mode: "left",
        leftClick: () => alert("Left clicked"),
        rightClick: () => alert("Right clicked"),
    },
};

export const RightOnly: Story = {
    args: {
        mode: "right",
        leftClick: () => alert("Left clicked"),
        rightClick: () => alert("Right clicked"),
    },
};
