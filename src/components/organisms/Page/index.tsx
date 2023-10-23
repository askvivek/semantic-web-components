import React from "react";

import Header from "../Header";
import "./page.css";
import { User } from "@/model/User";

const Page = ({
  children,
  title,
}: {
  children?: React.ReactNode;
  title?: string;
}) => {
  const [user, setUser] = React.useState<User>();

  return (
    <article>
      <section className="page">
        <h2>{title}</h2>
        {children}
      </section>
    </article>
  );
};
export default Page;
