import React from "react";
import { Layout } from "antd";
import "antd/dist/antd.min.css";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>Header</Header>
      <Content style={{ padding: "0 50px" }}>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
