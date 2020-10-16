import './styles/style.scss';
import _ from 'lodash';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import Logo from './logo1.svg';

function injectImgSrc() {
  const logoContainer = document
    .querySelector('.logo-header')
    .querySelector('img');

  logoContainer.src = Logo;
}

injectImgSrc();
