import _ from 'lodash';
import "../node_modules/bootstrap/scss/bootstrap.scss";
import * as bootstrap from 'bootstrap';

function component() {
  const element = document.createElement('div');
  element.innerHTML = '<app-sample-music></app-sample-music>';
  return element;
}

document.body.appendChild(component());