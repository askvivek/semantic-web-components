import React from "react";
import "./heading.css";

interface HeadingProps {
  label: string;
  href: string;
  tag: "h1" | "h2" | "h3" | "h4";
}

const Heading: React.FC<HeadingProps> = ({ label, href, tag }) => {
  let Tag = tag as keyof JSX.IntrinsicElements;
  return (
    <a href={href}>
      <Tag>{label}</Tag>
    </a>
  );
};
export default Heading;
