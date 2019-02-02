import React, { Component } from "react";
import './style.scss';

class TextCaption extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { mainText, captionText } = this.props;
    return (
      <div className="quote">
        <div className="text-heading-lg">{mainText}</div>
        <div className="quote-caption">{captionText}</div>
      </div>
    );
  }
}

TextCaption.defaultProps = {
  mainText: "",
  captionText: ""
};

module.exports = TextCaption;