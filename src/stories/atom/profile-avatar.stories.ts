import { Meta, StoryObj } from "@storybook/react";
import { ProfileAvatar } from "@/components";
import person from "assets/images/person.jpg";

const meta: Meta<typeof ProfileAvatar> = {
    title: "Atom/ProfileAvatar",
    component: ProfileAvatar,
};
export default meta;
type Story = StoryObj<typeof ProfileAvatar>;

export const Small: Story = {
    args: {
        image: person,
        size: "small",
        title: "Naser Papi",
        subtitle: "Tehran, Iran",
    },
};
