import { Meta, StoryObj } from "@storybook/react";
import { Alert } from "@/components/atom";

const meta: Meta<typeof Alert> = {
    title: "Atom/Alert",
    component: Alert,
};
export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = {
    args: {
        message: "This is an info alert",
        variant: "info",
    },
};
export const Error: Story = {
    args: {
        message: "This is an error alert",
        variant: "error",
    },
};

export const Warn: Story = {
    args: {
        message: "This is a warning alert",
        variant: "warn",
    },
};

export const Closable: Story = {
    args: {
        message: "This is a warning alert",
        variant: "warn",
        closable: true,
    },
};
