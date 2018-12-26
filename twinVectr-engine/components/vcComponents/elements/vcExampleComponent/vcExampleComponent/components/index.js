import React from 'react'
import vcCake from 'vc-cake';
const vcvAPI = vcCake.getService('api');
const TestRender = require("../../../../../../../frontend/modules/test");

export default class vcExampleComponent extends vcvAPI.elementComponent {

  constructor(props) {
    super(props);
  }

  shortcodeReturn() {
    return (
      <div className='vcvhelper' data-vcvs-html={`[vcv_test]`}>
        <TestRender />
      </div>
    )
  }

  render() {
    const { id, atts, editor } = this.props
    const doAll = this.applyDO('all');

    return <div {...editor} >
      <div className="vce-vc-component" id={'el-' + id}  {...doAll}>
        <div>{this.shortcodeReturn()}</div>
      </div>
    </div>
  }
}
