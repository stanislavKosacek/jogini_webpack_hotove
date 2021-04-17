import './index.html';
import './style.css';
import './img/yoga-pose.jpg';

import { Header } from './Header/index';
import { Intro } from './Intro/index';
import { Pose } from './Pose/index';

const appElm = document.querySelector('#app');

fetch('https://testapi.skosacek.cz/jogini/')
  .then((data) => data.json())
  .then((json) => {
    appElm.appendChild(Header(json.header));
    appElm.appendChild(Intro(json.intro));
    appElm.appendChild(Pose(json.pose));
  });
