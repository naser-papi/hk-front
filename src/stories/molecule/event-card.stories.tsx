import { Meta, StoryObj } from "@storybook/react";
import { EventCard } from "@/components";
import event from "assets/images/event1.webp";
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
        date: new Date(),
        commentsCount: 5,
        desc: "This Place Really Place For Awesome Moment",
        image: event,
        href: "#",
    },
};
