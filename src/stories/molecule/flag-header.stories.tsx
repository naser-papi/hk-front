import { Meta, StoryObj } from "@storybook/react";
import { FlagHeader } from "@/components/molecule";

const meta: Meta<typeof FlagHeader> = {
    title: "Molecule/FlagHeader",
    component: FlagHeader,
};
export default meta;
type Story = StoryObj<typeof FlagHeader>;

export const Default: Story = {
    args: {
        title: "Immigration to Netherlands",
    },
};
export const Mobile: Story = {
    args: {
        title: "Immigration to Netherlands",
    },
    decorators: [
        (Story) => (
            <div style={{ width: "360px" }}>
                <Story />
            </div>
        ),
    ],
};

export const Tablet: Story = {
    args: {
        title: "Immigration to Netherlands",
    },
    decorators: [
        (Story) => (
            <div style={{ width: "744px" }}>
                <Story />
            </div>
        ),
    ],
};
