import React from 'react'
import vcCake from 'vc-cake';
import Button from '../../../../../../../frontend/components/Button';
const vcvAPI = vcCake.getService('api');

export default class HeroImage extends vcvAPI.elementComponent {

  constructor(props) {
    super(props);
    this.heroText = React.createRef();
    this.heroButton = React.createRef();
  }

  componentDidUpdate() {
    const { buttonPosition, textPosition } = this.props.atts;
    const btnPositions = buttonPosition.split(' ');
    const txtPositions = textPosition.split(' ');

    this.heroText.current.style.transform = `translate(${txtPositions[0]}, ${txtPositions[1]})`;
    this.heroButton.current.style.transform = `translate(${btnPositions[0]}, ${btnPositions[1]})`;
  }

  render() {
    const { id, atts, editor } = this.props
    const { heroHeight, output, color, buttonColor, buttonText, buttonHref } = atts;
    const doAll = this.applyDO('all');
    const textStyle = {
      color,
    };

    return (
      <div {...editor} >
        <div className="vceHeroImage--container" style={{ 'height': `${heroHeight}px` }} id={'el-' + id}  {...doAll} >
          <div ref={this.heroText} style={{ ...textStyle }} > {output}</div>
          <div ref={this.heroButton}>
            <Button
              buttonText={buttonText}
              buttonHref={buttonHref}
              buttonColor={buttonColor}
            />
          </div>
        </div>
      </div>
    );
  }
}