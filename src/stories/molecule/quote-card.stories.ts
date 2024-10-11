import { Meta, StoryObj } from "@storybook/react";
import { QuoteCard } from "@/components";
import person from "assets/images/person.jpg";

const meta: Meta<typeof QuoteCard> = {
    title: "Molecule/QuoteCard",
    component: QuoteCard,
};
export default meta;
type Story = StoryObj<typeof QuoteCard>;

export const Default: Story = {
    args: {
        profile: {
            image: person,
            title: "Naser Papi",
            subtitle: "Tehran, Iran",
        },
        quote: "immigration advisory foundation was established with a small idea that was incepted in the minds of its promoters in the year 1994! We skilfully guide applicants for immigration process to any country they aspire to settle down immigration advisory foundation was established with a small idea that was incepted ",
    },
};
