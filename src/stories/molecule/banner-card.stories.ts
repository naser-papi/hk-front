import { Meta, StoryObj } from "@storybook/react";
import { BannerCard } from "@/components";

const meta: Meta<typeof BannerCard> = {
    title: "Molecule/BannerCard",
    component: BannerCard,
};
export default meta;
type Story = StoryObj<typeof BannerCard>;

export const Default: Story = {
    args: {
        image: "https://ik.imagekit.io/tdvmspnmgu/temp/sample_cdedf4f2d4_GdULrJihe.webp",
        title: "The Title Of the link that should describe it briefly",
        detailLink: "#",
        desc: "the brief description from the event, this text would be tow lint at most...",
    },
};
