import React from "react";
interface InputProps {
  /**
   * id for input element from parent
   */
  id?: string;
  /**
   * input value from props / parent
   */
  value?: string;
  /**
   * onChange event handler with value
   * user input value
   */
  onChange?: () => {};
  /**
   * Pleaseholder text
   */
  placeHolder?: string;
}
const TextInput = ({ id, value, onChange, placeHolder }: InputProps) => {
  return (
    <input
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeHolder}
    />
  );
};

export default TextInput;
