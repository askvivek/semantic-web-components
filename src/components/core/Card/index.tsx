import React from "react";
import Heading from "../Heading/index";
import MenuItemImage from "../MenuItemImage/index";
import Paragraph from "../Paragraph/index";

interface CardProps {
  name: string;
  image?: string;
  description: string;
  price: string;
  detailslink?: string;
  onClick?: () => {};
}

const Card: React.FC<CardProps> = ({
  name,
  image,
  description,
  price,
  detailslink,
}) => {
  return (
    <div className="menu-item-card">
      <Heading tag="h3" label={name} href={detailslink || ""} />
      {image ? <MenuItemImage imageUrl={image} altText={name} /> : ""}
      <Paragraph text={description} />
      <Paragraph text={`$${price}`} />
    </div>
  );
};

export default Card;
