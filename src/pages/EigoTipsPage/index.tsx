import React from "react";
import { Layout } from "antd";
import "./style.css";

import HomePageHeader from "../../components/HomePageHeader";
import HomePageSteps from "../../components/HomePageSteps";

const { Content } = Layout;

class EigoTipsPage extends React.Component {
  render() {
    return (
      <div>
        <Content style={{ margin: 16 }}>
          <HomePageHeader />
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            <HomePageSteps />
          </div>
        </Content>
      </div>
    );
  }
}

export default EigoTipsPage;
