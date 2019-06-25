import React from "react";
import { Layout } from "antd";
import "./style.css";

import { withRouter } from "react-router-dom";

import Sidebar from "../Sidebar";

const { Footer } = Layout;

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout>
        {children}
        <Footer style={{ textAlign: "center" }}>
          Eigo Kits ©2019 Created by Phuud
        </Footer>
      </Layout>
    </Layout>
  );
}

export default withRouter(PageLayout);
