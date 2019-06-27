import React from "react";
import { Layout, Table } from "antd";
import "./style.css";
import { fetchGist } from "../../services/nextFetch";

import HomePageHeader from "../../components/HomePageHeader";

const { Content } = Layout;
const columns = [
  {
    title: 'Phrase',
    dataIndex: 'source',
    key: 'source',
  },
  {
    title: 'Synonym',
    dataIndex: 'value',
    key: 'value',
  },
  {
    title: 'Description',
    dataIndex: 'desc',
    key: 'desc',
  }
];

class EigoTipsTablePage extends React.Component {
  componentDidMount() {
    fetchGist("eigoTipsList.json")
    .then((res) => {
      console.log(res);
      this.setState({ 
        replacement: res 
      })
    })
  }
  
  state = {
    replacement: []
  };

  render() {
    const {replacement} = this.state;

    return (
      <div>
        <Content style={{ margin: 16 }}>
          <HomePageHeader />
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            <Table columns={columns} dataSource={replacement} />
          </div>
        </Content>
      </div>
    );
  }
}

export default EigoTipsTablePage;
