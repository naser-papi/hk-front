import { Meta, StoryObj } from "@storybook/react";
import { IconLabel } from "@/components/atom";
import { faHouse } from "@awesome.me/kit-026a927a83/icons/classic/regular";

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
        icon: faHouse,
    },
};
export const Secondary: Story = {
    args: {
        label: "Read More",
        intend: "secondary",
        icon: faHouse,
    },
};
