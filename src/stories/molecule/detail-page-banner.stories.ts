import { Meta, StoryObj } from "@storybook/react";
import { DetailPageBanner } from "@/components/molecule";

const meta: Meta<typeof DetailPageBanner> = {
    title: "Molecule/DetailPageBanner",
    component: DetailPageBanner,
};
export default meta;
type Story = StoryObj<typeof DetailPageBanner>;

export const Default: Story = {
    args: {
        title: "this is the title of the page",
        images: [
            "https://ik.imagekit.io/tdvmspnmgu/temp/medium_event3_0115653668_nHfS15I6I.jpeg?updatedAt=1729840756809",
            "https://ik.imagekit.io/tdvmspnmgu/temp/small_sample_cdedf4f2d4_AZ_d43mJi.webp?updatedAt=1729840551222",
            "https://ik.imagekit.io/tdvmspnmgu/temp/large_transportation_f27f0abb32_B8hgM-peL.webp?updatedAt=1731761683694",
        ],
        meta: [
            { label: "label1", value: "value1" },
            { label: "label2", value: "value2" },
            { label: "label3", value: "value3" },
            { label: "label4", value: "value4" },
            { label: "label5", value: "value5" },
            { label: "label6", value: "value6" },
        ],
    },
};
