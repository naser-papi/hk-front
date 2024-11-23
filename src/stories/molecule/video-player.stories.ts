import { Meta, StoryObj } from "@storybook/react";
import { VideoPlayer } from "@/components/molecule";

const meta: Meta<typeof VideoPlayer> = {
    title: "Molecule/VideoPlayer",
    component: VideoPlayer,
};
export default meta;
type Story = StoryObj<typeof VideoPlayer>;

export const Default: Story = {
    args: {
        url: "https://youtu.be/0Pz9g654OIc",
    },
};
