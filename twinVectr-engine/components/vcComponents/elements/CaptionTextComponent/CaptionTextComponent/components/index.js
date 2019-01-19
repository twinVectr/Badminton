import React from 'react'
import vcCake from 'vc-cake';
const vcvAPI = vcCake.getService('api');
const TextCaption = require("../../../../../../../frontend/modules/textCaption");

export default class vcExampleComponent extends vcvAPI.elementComponent {

  constructor(props) {
    super(props);
  }

  render() {
    const { id, atts, editor } = this.props
    const { captionText, output } = atts;
    const doAll = this.applyDO('all');

    return <div {...editor} >
      <div id={'el-' + id}  {...doAll}>
        <TextCaption mainText={output} captionText={captionText} />
      </div>
    </div>
  }
}
