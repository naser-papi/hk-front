import type { Meta, StoryObj } from "@storybook/react";
import { BulletPoint } from "@/components/atom";

const meta: Meta<typeof BulletPoint> = {
    title: "Atom/Bullet",
    component: BulletPoint,
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {
    args: {
        active: true,
    },
};

export const InActive: Story = {
    args: {
        active: false,
    },
};
