import React from 'react'
import vcCake from 'vc-cake';
const vcvAPI = vcCake.getService('api')

export default class vcExampleComponent extends vcvAPI.elementComponent {

  constructor(props) {
    super(props);
  }

  render() {
    const { id, atts, editor } = this.props
    const { height: value } = atts;
    const doAll = this.applyDO('all');

    return <div {...editor} >
      <div className="vceHeroImage--container" style={{ 'height': value }} id={'el-' + id}  {...doAll} />
    </div>
  }
}
