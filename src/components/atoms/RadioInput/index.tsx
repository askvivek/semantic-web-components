import React, { useState } from "react";

interface RadioInputProps {
  value: string;
  label: string;
  isSelected: boolean;
  onSelect: (value: string) => {};
}
const RadioInput: React.FC<RadioInputProps> = ({
  value,
  label,
  isSelected,
  onSelect,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(isSelected);

  const handleRadioInputChange = (value: string) => {
    setIsChecked(!isChecked);
    onSelect(value);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          checked={isChecked}
          onChange={() => handleRadioInputChange(value)}
        />
        {label}
      </label>
    </div>
  );
};

export default RadioInput;
