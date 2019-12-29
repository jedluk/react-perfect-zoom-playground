import React from 'react';

const getPos = current => {
  const pos = ['row', 'row-reverse', 'center'];
  if (pos.indexOf(current) === -1) {
    return pos[0];
  }
  return pos.indexOf(current) === pos.length - 1 ? pos[0] : pos[pos.indexOf(current) + 1];
};

const FlexController = ({ flexDirection, setFlexDirection }) => {
  function setDirection() {
    setFlexDirection(getPos(flexDirection));
  }
  return (
    <button onClick={setDirection} className="flex-button">
      <span>{flexDirection || 'change flex direction'}</span>
    </button>
  );
};
export default FlexController;
