import React from "react";
import Header from "../Header";
import Page from "../Page";
import { Footer } from "../Footer";
import { User } from "@/model/User";

const Layout = ({
  children,
  user,
}: {
  children: React.ReactNode;
  user: User;
}) => {
  const onLogin = () => {};
  const onLogout = () => {};
  return (
    <body>
      <Header user={user}></Header>
      <Page>{children}</Page>
      <Footer></Footer>
    </body>
  );
};

export default Layout;
