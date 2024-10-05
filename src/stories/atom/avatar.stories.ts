import { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "@/components";
import person from "assets/images/person.jpg";

const meta: Meta<typeof Avatar> = {
    title: "Atom/Avatar",
    component: Avatar,
};
export default meta;
type Story = StoryObj<typeof Avatar>;

export const Small: Story = {
    args: {
        image: person,
        size: "small",
    },
};
