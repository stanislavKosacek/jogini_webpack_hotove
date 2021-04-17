export const Pose = (props) => {
  const imgElm = document.createElement('img');
  imgElm.classList.add('pose');
  imgElm.src = props.cestaKObrazku;

  return imgElm;
};
