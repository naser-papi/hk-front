import { Meta, StoryObj } from "@storybook/react";
import { TextBox } from "@/components";

const meta: Meta<typeof TextBox> = {
    title: "Atom/TextBox",
    component: TextBox,
    argTypes: {
        type: {
            control: "radio",
            options: ["text", "textarea", "password"],
        },
    },
};
export default meta;
type Story = StoryObj<typeof TextBox>;

export const Primary: Story = {
    args: {
        type: "text",
        value: "textbox...",
        placeholder: "placeholder",
    },
};
