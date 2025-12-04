import { Meta, StoryObj } from "@storybook/react";
import { IconLabel } from "@/components/atom";
import { FaHouse } from "react-icons/fa6";

const meta: Meta<typeof IconLabel> = {
    title: "Atom/IconLabel",
    component: IconLabel,
};
export default meta;
type Story = StoryObj<typeof IconLabel>;

export const Primary: Story = {
    args: {
        label: "Read More",
        intend: "primary",
        icon: FaHouse,
    },
};
export const Secondary: Story = {
    args: {
        label: "Read More",
        intend: "secondary",
        icon: FaHouse,
    },
};
