import React, { Component } from "react";

class HeroImage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { extraClasses, heightValue } = this.props;
    const heroClasses = classNames(
      'heroImage',
      {
        ...extraClasses,
      });
    return (
      <div className={heroClasses} style={{ height: heightValue }} />
    );
  }
}

module.exports = HeroImage;