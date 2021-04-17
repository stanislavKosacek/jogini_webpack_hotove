export const Menu = (props) => {
  const navElm = document.createElement('nav');

  props.polozkyMenu.forEach((polozka) => {
    const aElm = document.createElement('a');
    aElm.href = polozka.url;
    aElm.textContent = polozka.text;

    navElm.appendChild(aElm);
  });

  return navElm;
};
