import { Meta, StoryObj } from "@storybook/react";
import { EventCard } from "@/components";

const meta: Meta<typeof EventCard> = {
    title: "Molecule/EventCard",
    component: EventCard,
    decorators: [
        (Story) => (
            <div style={{ width: "360px" }}>
                {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
                <Story />
            </div>
        ),
    ],
};
export default meta;
type Story = StoryObj<typeof EventCard>;

export const Default: Story = {
    args: {
        date: "2024-10-25T13:21:18.781Z",
        commentsCount: 5,
        desc: "This Place Really Place For Awesome Moment",
        ikUrl: "https://ik.imagekit.io/tdvmspnmgu/temp/event1_48f8daccab_3M0_u9SPS.webp",
        href: "#",
    },
};
