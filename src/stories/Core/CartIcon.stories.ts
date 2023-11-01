import type { Meta, StoryObj } from "@storybook/react";
import CartIcon from "../../components/atoms/Icons/CartIcon";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Core/Icons/CartIcon",
  component: CartIcon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    height: { control: "" },
    width: { control: "" },
    fill: { control: "" },
  },
} satisfies Meta<typeof CartIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const CartIconSample: Story = {
  args: {
    height: 32,
    width: 32,
    fill: "blue",
  },
};
