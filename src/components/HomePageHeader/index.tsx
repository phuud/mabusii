import React from "react";
import { Typography, Icon } from "antd";

import "./style.css";

const { Title, Paragraph } = Typography;

const content = (
  <div className="content">
    <Title>English Phrase Tips</Title>
    <Paragraph>
      Provide some tips for your inputs. 
      (P.S. Data was imported from the <a href="https://zhuanlan.zhihu.com/p/23301750">Zhihu article</a>.)
    </Paragraph>
    <p className="header_content_link">
      <a href="/about">
        <img
          src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg"
          alt="info"
        />
        How to use...
      </a>
      <a href="/tips-list">
        <img
          src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg"
          alt="info"
        />
        Tips List
      </a>
    </p>
  </div>
);

const extraContent = (
  <p>
    <Icon type="crown" theme="twoTone" twoToneColor="#f2941b" />
  </p>
);

export default class HomePageHeader extends React.Component {
  render() {
    return (
      <div className="header_wrap">
        <div className="wrap">
          <div className="content">{content}</div>
          <div className="header_extra_content">
            {extraContent}
          </div>
        </div>
      </div>
    );
  }
}
