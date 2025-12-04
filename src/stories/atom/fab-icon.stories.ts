import { Meta, StoryObj } from "@storybook/react";
import { FabIcon } from "@/components/atom";
import { FaHouse } from "react-icons/fa6";

const meta: Meta<typeof FabIcon> = {
    title: "Atom/FabIcon",
    component: FabIcon,
};
export default meta;
type Story = StoryObj<typeof FabIcon>;

export const Default: Story = {
    args: {
        icon: FaHouse,
    },
};
