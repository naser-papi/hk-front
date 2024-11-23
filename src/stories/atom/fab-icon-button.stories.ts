import { Meta, StoryObj } from "@storybook/react";
import { FabIconButton } from "@/components/atom";
import { faPlay } from "@awesome.me/kit-026a927a83/icons/classic/solid";

const meta: Meta<typeof FabIconButton> = {
    title: "Atom/FabIconButton",
    component: FabIconButton,
};
export default meta;
type Story = StoryObj<typeof FabIconButton>;

export const Default: Story = {
    args: {
        icon: faPlay,
        label: "Play Video",
    },
};
