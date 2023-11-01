import React from "react";

interface MenuIconProps {
  width?: number;
  height?: number;
  fill?: string;
}

const MenuIcon: React.FC<MenuIconProps> = ({
  width = 24,
  height = 24,
  fill = "currentColor",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
    >
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </svg>
  );
};

export default MenuIcon;
