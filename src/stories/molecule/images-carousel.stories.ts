import { Meta, StoryObj } from "@storybook/react";
import { ImagesCarousel } from "@/components/molecule";

const meta: Meta<typeof ImagesCarousel> = {
    title: "Molecule/ImagesCarousel",
    component: ImagesCarousel,
};
export default meta;
type Story = StoryObj<typeof ImagesCarousel>;

export const Default: Story = {
    args: {
        images: [
            "https://ik.imagekit.io/tdvmspnmgu/temp/medium_event3_0115653668_nHfS15I6I.jpeg?updatedAt=1729840756809",
            "https://ik.imagekit.io/tdvmspnmgu/temp/small_sample_cdedf4f2d4_AZ_d43mJi.webp?updatedAt=1729840551222",
            "https://ik.imagekit.io/tdvmspnmgu/temp/large_transportation_f27f0abb32_B8hgM-peL.webp?updatedAt=1731761683694",
        ],
    },
};

export const NoData: Story = {
    args: {
        images: [],
    },
};
