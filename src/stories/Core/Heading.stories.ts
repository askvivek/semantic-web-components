import type { Meta, StoryObj } from "@storybook/react";
import Heading from "../../components/atoms/Heading";
import { satisfies } from "semver";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Core/Heading",
  component: Heading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "" },
    href: { control: "" },
    tag: { control: "" },
  },
} satisfies Meta<typeof Heading>;
export default meta;
type Story = StoryObj<typeof meta>;

export const HeadingH1: Story = {
  args: {
    label: "Heading h1",
    href: "/",
    tag: "h1",
  },
};

export const HeadingH2: Story = {
  args: {
    label: "Heading h2",
    href: "/",
    tag: "h2",
  },
};
