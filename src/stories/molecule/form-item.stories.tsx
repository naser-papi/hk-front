import { Meta, StoryObj } from "@storybook/react";
import { FormItem } from "@/components/molecule";
import { TextBox } from "@/components/atom";

const meta: Meta<typeof FormItem> = {
    title: "Molecule/FormItem",
    component: FormItem,
};
export default meta;
type Story = StoryObj<typeof FormItem>;

export const Default: Story = {
    args: {
        label: "First Name",
        children: <TextBox type={"text"} placeholder={"Naser Papi"} />,
    },
};
