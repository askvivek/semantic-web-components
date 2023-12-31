import IconButton from "../../components/atoms/IconButton";
import UserIcon from "../../components/atoms/Icons/UserIcon";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Core/IconButton",
  component: IconButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: "IconButton",
    icon: UserIcon,
  },
};

export const Secondary: Story = {
  args: {
    label: "IconButton",
    icon: UserIcon,
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "IconButton",
    icon: UserIcon,
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "IconButton",
    icon: UserIcon,
  },
};
