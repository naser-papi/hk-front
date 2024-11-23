import { Meta, StoryObj } from "@storybook/react";
import { FabIcon } from "@/components/atom";
import { faHouse } from "@awesome.me/kit-026a927a83/icons/classic/solid";

const meta: Meta<typeof FabIcon> = {
    title: "Atom/FabIcon",
    component: FabIcon,
};
export default meta;
type Story = StoryObj<typeof FabIcon>;

export const Default: Story = {
    args: {
        icon: faHouse,
    },
};
