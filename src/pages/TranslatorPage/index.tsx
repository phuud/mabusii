import React from "react";
import "./style.css";
import Iframe from "react-iframe";

class TranslatorPage extends React.Component {
  render() {
    return (
      <div>
        <Iframe
          url="https://fanyi.baidu.com/"
          width="80%"
          height="450px"
          id="myId"
          className="myFrame"
          display="inline"
          position="relative"
        />
        <Iframe
          url="https://www.youdao.com/"
          width="80%"
          height="450px"
          id="myId"
          className="myFrame"
          display="inline"
          position="relative"
        />
        <Iframe
          url="https://cn.bing.com/translator/?mkt=zh-CN"
          width="80%"
          height="450px"
          id="myId"
          className="myFrame"
          display="inline"
          position="relative"
        />
      </div>
    );
  }
}

export default TranslatorPage;
