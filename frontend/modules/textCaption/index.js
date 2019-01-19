import React, { Component } from "react";


class TextCaption extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { mainText, captionText } = this.props;
    return (
      <React.Fragment>
        <div className="text-heading-lg">{mainText}</div>
        <div>{captionText}</div>
      </React.Fragment>
    );
  }
}

TextCaption.defaultProps = {
  mainText: "",
  captionText: ""
};


module.exports = TextCaption;