import { Menu } from './../Menu/index';

export const Header = (props) => {
  const headerElm = document.createElement('header');
  const titleElm = document.createElement('h1');
  titleElm.classList.add('site-title');
  titleElm.textContent = props.nadpis;

  headerElm.appendChild(titleElm);
  headerElm.appendChild(Menu({ polozkyMenu: props.polozkyMenu }));

  return headerElm;
};
