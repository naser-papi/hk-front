import { Meta, StoryObj } from "@storybook/react";
import { BlogBannerCard } from "@/components/molecule";

const meta: Meta<typeof BlogBannerCard> = {
    title: "Molecule/BlogBannerCard",
    component: BlogBannerCard,
    decorators: [
        (Story) => (
            <div style={{ width: "360px" }}>
                <Story />
            </div>
        ),
    ],
};
export default meta;
type Story = StoryObj<typeof BlogBannerCard>;

export const Default: Story = {
    args: {
        title: "Sample Blog Title",
        ikUrl: "https://ik.imagekit.io/tdvmspnmgu/temp/medium_sample_cdedf4f2d4_ysA2Lnfjd.webp?updatedAt=1729840552439",
        shortDesc: "This is a short description of the blog post.",
        link: "#",
    },
};
