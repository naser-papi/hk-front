import { Meta, StoryObj } from "@storybook/react";
import { FabIconButton } from "@/components/atom";
import { FaPlay } from "react-icons/fa6";

const meta: Meta<typeof FabIconButton> = {
    title: "Atom/FabIconButton",
    component: FabIconButton,
};
export default meta;
type Story = StoryObj<typeof FabIconButton>;

export const Default: Story = {
    args: {
        icon: FaPlay,
        label: "Play Video",
    },
};
