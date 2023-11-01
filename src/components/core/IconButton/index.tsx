import React, { Component } from "react";
import "./button.css";

interface IconButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Button icon
   */
  icon: React.FC;
  /**
   * Optional icon position left or right default will be left
   */
  iconPosition?: "left" | "right";
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const IconButton = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  icon,
  iconPosition = "left",
  ...props
}: IconButtonProps) => {
  const mode = primary ? "button--primary" : "button--secondary";
  const Icon = icon;
  return (
    <button
      type="button"
      className={["button", `button--${size}`, mode].join(" ")}
      {...props}
      style={{ backgroundColor: backgroundColor }}
    >
      {iconPosition == "left" ? (
        <span className="left">
          <Icon />
        </span>
      ) : (
        ""
      )}
      {label}
      {iconPosition == "right" ? (
        <span className="right">
          <Icon />
        </span>
      ) : (
        ""
      )}
    </button>
  );
};
export default IconButton;
