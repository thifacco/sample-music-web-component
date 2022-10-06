import _ from 'lodash';
import 'bootstrap/scss/bootstrap.scss';
import * as bootstrap from 'bootstrap';
import '@fortawesome/fontawesome-free/js/fontawesome.js';
import '@fortawesome/fontawesome-free/js/solid.js';
import '@fortawesome/fontawesome-free/js/regular.js';
import '@fortawesome/fontawesome-free/js/brands.js';
import '@fortawesome/fontawesome-free/scss/fontawesome.scss';
import '@fortawesome/fontawesome-free/scss/solid.scss';
import '@fortawesome/fontawesome-free/scss/regular.scss';
import '@fortawesome/fontawesome-free/scss/brands.scss';
import { SampleMusicComponent } from '../sampleMusic/sampleMusicComponent.js';

function component() {
  const element = document.createElement('app-sample-music');
  return element;
}
document.body.appendChild(component());