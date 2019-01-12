import vcCake from 'vc-cake'
import HeroImage from './components';
const vcvAddElement = vcCake.getService('cook').add;

vcvAddElement(
  require('./settings.json'),
  // Component callback
  function (component) {
    component.add(HeroImage)
  },
  // css settings // css for element
  {
    css: require('raw-loader!./styles/css/base.css'),
    editorCss: require('raw-loader!./editor.css'),
  }
)
