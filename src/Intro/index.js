export const Intro = (props) => {
  const introElm = document.createElement('div');
  introElm.classList.add('intro');

  const titleElm = document.createElement('h2');
  titleElm.textContent = props.nadpis;

  const pElm = document.createElement('p');
  pElm.textContent = props.odstavec;

  introElm.appendChild(titleElm);
  introElm.appendChild(pElm);

  return introElm;
};
