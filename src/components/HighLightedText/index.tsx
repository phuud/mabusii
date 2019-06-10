import React from "react";
import Highlighter from "react-highlight-words";

import "./style.css";

type Props = {
  textToHighlight: string;
  highlightedWords: Array<string>;
};

type State = {
  text: string;
};

export default class HighLightedText extends React.PureComponent<Props, State> {
  state = {
    text: "The dog is chasing the cat. Or perhaps they're just playing?"
  };

  render() {
    // const { text } = this.state;
    const { textToHighlight, highlightedWords } = this.props;
    return (
      <Highlighter
        highlightClassName="YourHighlightClass"
        searchWords={highlightedWords}
        autoEscape={true}
        textToHighlight={textToHighlight}
      />
    );
  }
}
