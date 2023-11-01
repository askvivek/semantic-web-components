import React from "react";
interface LabelProps {
  label: string;
}

const Label: React.FC<LabelProps> = ({ label }) => {
  return <label>{label}</label>;
};
export default Label;
