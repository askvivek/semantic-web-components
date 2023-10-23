import { ChangeEventHandler } from "react";
interface SelectOption {
  value: string;
  label: string;
}
interface InputProps {
  /**
   * id for input element from parent
   */
  id?: string;
  /**
   * Selected value from props / parent
   */
  selected?: string;
  /**
   * onChange event handler with value
   * user changed value
   */
  onChange?: (e: any) => {};
  /**
   *
   * @returns on select value return selected value
   */
  onSelect?: (index: number, selected: SelectOption) => {};
  /**
   * Array on SelectOption value
   */
  options?: Array<SelectOption>;
}
const SelectInput = ({
  id,
  selected,
  onChange,
  onSelect,
  options,
}: InputProps) => {
  return (
    <select id={id} value={selected} onChange={onChange}>
      {options?.map(({ value, label }: SelectOption, index) => {
        return (
          <option
            value={value}
            selected={value == selected}
            onSelect={() => onSelect && onSelect(index, options[index])}
          >
            {label}
          </option>
        );
      })}
    </select>
  );
};

export default SelectInput;
