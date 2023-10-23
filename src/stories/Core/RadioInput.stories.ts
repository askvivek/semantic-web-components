import type { Meta, StoryObj } from "@storybook/react";
import RadioInput from "../../components/atoms/RadioInput";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Core/RadioInput",
  component: RadioInput,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    value: { control: "" },
    label: { control: "" },
    onSelect: { control: () => {} },
    isSelected: { control: true },
  },
} satisfies Meta<typeof RadioInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const RadioInputNotSelected: Story = {
  args: {
    value: "one",
    label: "One",
    isSelected: false,
    onSelect: (value) => {
      return value;
    },
  },
};

export const RadioInputSelected: Story = {
  args: {
    value: "one",
    label: "One",
    isSelected: true,
    onSelect: (value) => {
      return value;
    },
  },
};
