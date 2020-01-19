import React from 'react';

const Loader = ({ mousePosition }) => {
  return (
    <div class="lds-default" style={{ position: 'absolute', ...mousePosition }}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
