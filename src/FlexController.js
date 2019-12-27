import React from 'react';

const getPos = current => {
  const pos = ['row', 'row-reverse', 'random'];
  return pos.indexOf(current) === pos.length - 1 ? pos[0] : pos[pos.indexOf(current) + 1];
};

const FlexController = ({ flexDirection, setFlexDirection }) => {
  function setDirection() {
    setFlexDirection(getPos(flexDirection));
  }
  return (
    <button onClick={setDirection} className="flex-button">
      <span style={{ textOrientation: 'upright' }}>{flexDirection}</span>
    </button>
  );
};
export default FlexController;
