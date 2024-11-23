import { Meta, StoryObj } from "@storybook/react";
import { CategoryList } from "@/components/molecule";

const meta: Meta<typeof CategoryList> = {
    title: "Molecule/CategoryList",
    component: CategoryList,
};
export default meta;
type Story = StoryObj<typeof CategoryList>;

export const Default: Story = {
    args: {
        cats: [
            { key: 1, text: "Category1" },
            { key: 2, text: "Category2" },
            { key: 3, text: "Category3" },
            { key: 4, text: "Category4" },
            { key: 5, text: "Category5" },
        ],
        selected: 2,
        setSelected: () => {},
    },
};
