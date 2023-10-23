import React, { useState } from "react";

interface CheckBoxProps {
  value: string;
  label: string;
  isSelected: boolean;
  onSelect: (value: boolean) => {};
}
const CheckBox: React.FC<CheckBoxProps> = ({
  value,
  label,
  isSelected,
  onSelect,
}) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onSelect(!isSelected)}
        />
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
