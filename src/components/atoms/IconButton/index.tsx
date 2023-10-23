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
  icon: React.ReactNode;
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
  return (
    <button
      type="button"
      className={["button", `button--${size}`, mode].join(" ")}
      {...props}
    >
      {iconPosition == "left" ? <span className="left">{icon}</span> : ""}
      {label}
      {iconPosition == "right" ? <span className="right">{icon}</span> : ""}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  );
};
export default IconButton;
