import React from "react";
import { Layout, Menu, Icon } from "antd";
import "./style.css";

import HomePageHeader from "../HomePageHeader";
import HomePageSteps from "../HomePageSteps";

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class PageLayout extends React.Component {
  state = {
    collapsed: false
  };

  onCollapse = (collapsed: boolean) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1">
              <Icon type="exception" />
              <span>Tips</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="tool" />
                  <span>Tools</span>
                </span>
              }
            >
              <Menu.Item key="3">
                <a
                  href="https://chrome.google.com/webstore/detail/grammarly-for-chrome/kbfnbcaeplbcioakkpcpgfkobkghlhen"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Grammarly
                </a>
              </Menu.Item>
              <Menu.Item key="4">
                <a
                  href="https://www.youdao.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Youdao Dict
                </a>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="question-circle" />
              <span>About</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          {/* <Header style={{ background: "#fff", padding: 0 }}>
            
          </Header> */}
          <Content style={{ margin: 16 }}>
            <HomePageHeader />
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              <HomePageSteps />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default PageLayout;
