import _ from 'lodash';
import "../node_modules/bootstrap/scss/bootstrap.scss";
import * as bootstrap from 'bootstrap';
import { SampleMusicComponent } from '../sampleMusic/sampleMusicComponent.js';

function component() {
  const element = document.createElement('app-sample-music');
  return element;
}

document.body.appendChild(component());