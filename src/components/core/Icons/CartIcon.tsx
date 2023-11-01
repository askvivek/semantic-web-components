import React from "react";

interface CartIconProps {
  width?: number;
  height?: number;
  fill?: string;
}

const CartIcon: React.FC<CartIconProps> = ({
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
      <path d="M21 4H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h3.12a3 3 0 1 0 5.76 0H21a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zM12 18a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm7-5H6V6h13.4a1 1 0 1 1 .6 1.94 1 1 0 0 1-.6-.94z" />
    </svg>
  );
};

export default CartIcon;
