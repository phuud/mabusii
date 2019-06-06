import React from "react";
import { Typography } from "antd";

import "./style.css";

const { Title, Paragraph } = Typography;

const content = (
  <div className="content">
    <Title>English Phrase Tips</Title>
    <Paragraph>
      Ant Design interprets the color system into two levels: a system-level
      color system and a product-level color system.
    </Paragraph>
    <Paragraph>
      Ant Design&#x27;s design team preferred to design with the HSB color
      model, which makes it easier for designers to have a clear psychological
      expectation of color when adjusting colors, as well as facilitate
      communication in teams.
    </Paragraph>
    <p className="contentLink">
      <a href="/">
        <img
          src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"
          alt="start"
        />
        Quick Start
      </a>
      <a href="/">
        <img
          src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg"
          alt="info"
        />
        Product Info
      </a>
      <a href="/">
        <img
          src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"
          alt="doc"
        />
        Product Doc
      </a>
    </p>
  </div>
);

const extraContent = (
  <img
    src="https://i.bmp.ovh/imgs/2019/06/b2b347bd07ff3ee7.png"
    alt="content"
  />
);

export default class HomePageHeader extends React.Component {
  render() {
    return (
      <div className="header_wrap">
        <div className="wrap">
          <div className="content">{content}</div>
          <div className="extraContent">{extraContent}</div>
        </div>
      </div>
    );
  }
}
