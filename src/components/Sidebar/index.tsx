import React from "react";
import { Layout, Menu, Icon } from "antd";
import { Link } from 'react-router-dom'
import "./style.css";

const { Sider } = Layout;
const { SubMenu } = Menu;

export default class Sidebar extends React.Component {
  state = {
    collapsed: false
  };

  onCollapse = (collapsed: boolean) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1">
            <Icon type="highlight" />
            <Link to="/tips" className='link'>Tips</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="exception" />
            <Link to="/translator" className='link'>Translator</Link>
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
            <Link to="/about" className='link'>About</Link>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}
