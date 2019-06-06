import React from "react";
import { Steps, Button, message, Input } from "antd";

import "./style.css";

const { TextArea } = Input;

const { Step } = Steps;

const steps = [
  {
    title: "Input",
    content: <TextArea rows={4} />
  },
  {
    title: "In Progress",
    content: "Second-content"
  },
  {
    title: "Done",
    content: "Last-content"
  }
];

export default class HomePageSteps extends React.Component {
  state = {
    current: 0
  };

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;
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
