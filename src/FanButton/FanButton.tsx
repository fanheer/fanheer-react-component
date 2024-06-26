import React from "react";
import "./fanbutton.css";

export interface FanButtonProps {
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
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const FanButton = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: FanButtonProps) => {
  const mode = primary
    ? "fanheer-button--primary"
    : "fanheer-button--secondary";
  return (
    <button
      type="button"
      className={["fanheer-button", `fanheer-button--${size}`, mode].join(
        " "
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
