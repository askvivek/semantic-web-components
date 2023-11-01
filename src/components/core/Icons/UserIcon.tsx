import React from "react";

interface UserIconProps {
  width?: number;
  height?: number;
  fill?: string;
}

const UserIcon: React.FC<UserIconProps> = ({
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
      <circle cx="12" cy="6.5" r="4.5" />
      <path d="M12 12a6.5 6.5 0 0 0-6.5 6.297V19.5h13V18.297A6.5 6.5 0 0 0 12 12z" />
    </svg>
  );
};

export default UserIcon;
