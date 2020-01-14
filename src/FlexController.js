/* eslint-disable jsx-a11y/anchor-is-valid */
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
    <a className="the-button" href="#" onClick={setDirection} style={{ fontSize: '.7rem' }}>
      {flexDirection || 'change flex direction'}
    </a>
  );
};
export default FlexController;
