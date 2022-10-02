import React from "react";
import { Layout } from "antd";

const { Header, Footer, Content } = Layout;

interface IMainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<IMainLayoutProps> = ({ children }) => {
  return (
    <Layout>
      <Header>Header</Header>
      <Content style={{ padding: "0 50px" }}>{children}</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};
