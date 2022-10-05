// import _ from 'lodash';
// import './styles.scss';
import "../node_modules/bootstrap/scss/bootstrap.scss";
import * as bootstrap from 'bootstrap';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());