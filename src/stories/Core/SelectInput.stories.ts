import SelectInput from "../../components/atoms/Input/SelectInput";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Core/SelectInput",
  component: SelectInput,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    id: { control: "input" },
    selected: { control: "value" },
    onChange: { control: () => {} },
  },
} satisfies Meta<typeof SelectInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Select: Story = {
  args: {
    options: [
      { label: "one", value: "1" },
      { label: "Two", value: "2" },
      { label: "Three", value: "3" },
      { label: "Four", value: "4" },
      { label: "Five", value: "5" },
    ],
  },
};

export const WithSelect: Story = {
  args: {
    selected: "3",
    options: [
      { label: "one", value: "1" },
      { label: "Two", value: "2" },
      { label: "Three", value: "3" },
      { label: "Four", value: "4" },
      { label: "Five", value: "5" },
    ],
  },
};
