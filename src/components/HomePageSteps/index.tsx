import React from "react";
import { Steps, Button, message, Input, Spin, List, Icon, Card } from "antd";
import HightLightedText from "../HighLightedText";
import { fetchGist } from "../../services/nextFetch";

import "./style.css";

const { TextArea } = Input;

const { Step } = Steps;

export default class HomePageSteps extends React.Component {
  componentDidMount() {
    fetchGist("eigoTips.json")
    .then((res) => {
      console.log(res);
      this.setState({ 
        replacement: res 
      })
    })
  }

  state = {
    current: 0,
    textToHighlight: "",
    highlightedWords: [],
    replacement: {}
  };

  next() {
    if (this.state.textToHighlight) {
      const current = this.state.current + 1;
      this.setState({ current });
      if (current === 1) {
        setTimeout(() => this.next(), 300);
      }
    } else {
      message.warning("Invalid Input!");
    }
  }

  prev() {
    const current = this.state.current === 2 ? 0 : this.state.current - 1;
    this.setState({ current });
  }

  onChangeTextInput = value => {
    const highlightedWords = Object.keys(this.state.replacement).filter(
      key => value.indexOf(key) > -1
    );
    this.setState({
      textToHighlight: value,
      highlightedWords
    });
  };

  render() {
    const { current, textToHighlight, highlightedWords, replacement } = this.state;

    const steps = [
      {
        title: "Input",
        content: (
          <TextArea
            className="input_box"
            rows={8}
            value={textToHighlight}
            onChange={e => this.onChangeTextInput(e.target.value)}
          />
        )
      },
      {
        title: "In Progress",
        content: <Spin size="large" className="spin_box" />
      },
      {
        title: "Done",
        content: (
          <div className="result_box">
            <Card title="Origin Text" className="result_text">
              <HightLightedText
                textToHighlight={textToHighlight}
                highlightedWords={highlightedWords}
              />
            </Card>
            <List
              bordered
              header={<b>Tips</b>}
              className="result_list"
              dataSource={highlightedWords}
              renderItem={item => (
                <List.Item>
                  <Icon
                    type="info-circle"
                    theme="twoTone"
                    twoToneColor="#52c41a"
                  />
                  <span>{item}</span>
                  <Icon type="arrow-right" />
                  <span><b>{replacement[item]}</b></span>
                </List.Item>
              )}
            />
          </div>
        )
      }
    ];

    return (
      <div>
        <Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps_content">{steps[current].content}</div>
        <div className="steps_action">
          {current === 0 && (
            <Button type="primary" onClick={() => this.next()}>
              Check!
            </Button>
          )}
          {current === 2 && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Reset
            </Button>
          )}
        </div>
      </div>
    );
  }
}
