import React, { Component } from "react";

class TextCaption extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { mainText, captionText } = this.props;
    return (
      <div className="quote">
        <div className="text-heading-lg">{mainText}</div>
        <p className="quote-caption">{captionText}</p>
      </div>
    );
  }
}

TextCaption.defaultProps = {
  mainText: "",
  captionText: ""
};

module.exports = TextCaption;