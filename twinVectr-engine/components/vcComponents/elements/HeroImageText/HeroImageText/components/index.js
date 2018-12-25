import React from 'react'
import vcCake from 'vc-cake';
const vcvAPI = vcCake.getService('api')

export default class HeroImage extends vcvAPI.elementComponent {

  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const { id, atts, editor } = this.props
    const { height: value, output, color } = atts;
    const doAll = this.applyDO('all');

    return <div {...editor} >
      <div className="vceHeroImage--container" style={{ 'height': value }} id={'el-' + id}  {...doAll} >
        <p className="text-heading-lg" style={{ 'color': color }}>{output}</p>
      </div>
    </div>
  }
}
