import React from "react";
import { Steps, Button, message, Input } from "antd";
import HightLightedText from "../HighLightedText";

import "./style.css";

const { TextArea } = Input;

const { Step } = Steps;

export default class HomePageSteps extends React.Component {
  state = {
    current: 0,
    textToHighlight: "",
    highlightedWords: ['the']
  };

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  onChangeTextInput = value => {
    this.setState({
      textToHighlight: value
    });
  };

  render() {
    const { current, textToHighlight, highlightedWords } = this.state;

    const steps = [
      {
        title: "Input",
        content: (
          <TextArea
            rows={10}
            value={textToHighlight}
            onChange={e => this.onChangeTextInput(e.target.value)}
          />
        )
      },
      {
        title: "In Progress",
        content: <HightLightedText textToHighlight={textToHighlight} highlightedWords={highlightedWords} />
      },
      {
        title: "Done",
        content: "Last-content"
      }
    ];

    return (
      <div>
        <Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => this.next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Previous
            </Button>
          )}
        </div>
      </div>
    );
  }
}
