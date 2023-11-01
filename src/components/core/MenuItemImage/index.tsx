import React from "react";

interface MenuItemImageProps {
  imageUrl: string;
  altText: string;
}

const MenuItemImage: React.FC<MenuItemImageProps> = ({ imageUrl, altText }) => {
  return (
    <div className="menu-item-image">
      <img src={imageUrl} alt={altText} />
    </div>
  );
};

export default MenuItemImage;
