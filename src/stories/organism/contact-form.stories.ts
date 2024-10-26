import { Meta, StoryObj } from "@storybook/react";
import { ContactForm } from "@/components";

const meta: Meta<typeof ContactForm> = {
    title: "Organism/ContactForm",
    component: ContactForm,
};
export default meta;
type Story = StoryObj<typeof ContactForm>;

export const Default: Story = {
    args: {},
};
