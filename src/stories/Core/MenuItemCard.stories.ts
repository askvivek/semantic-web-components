import MenuItemCard from "../../components/atoms/MenuItemCard";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Core/MenuItemCard",
  component: MenuItemCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    name: { control: "" },
    description: { control: "" },
    price: { control: "" },
  },
} satisfies Meta<typeof MenuItemCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const MenuItemCardSample: Story = {
  args: {
    name: "TACO KIT",
    image:
      "https://www.moes.com/-/media/moes/menu/meal-kits/moes_838421_website-card-menu-item_taco-kit_690x320_1-system_v1.png?v=1&d=20230206T130728Z&la=en&h=320&w=690&hash=26846A274E64074153A9CDB026797B8C",
    description:
      "Enjoy our tacos at home with a build your own taco kit. Comes with 12 soft flour tortillas, your choice of 2 proteins, lettuce, shredded cheese, pico de gallo, rice, beans, sour cream and of course…a bowl of Moe's famous queso. As usual, the chips and salsa are on us!",
    price: "25",
  },
};
