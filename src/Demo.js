import React, { Fragment } from 'react';
import Paragraph from './Paragraph';
import PerfectZoom from 'react-perfect-zoom';
import smallCookie from './assets/cookie_small.jpg';
import largeCookie from './assets/cookie_large.jpg';

const source = {
  thumbnailURL: smallCookie,
  thumbnailSize: [300, 500],
  imageURL: largeCookie
};

export default function Demo(props) {
  return (
    <Fragment>
      <div className="demo-content">
        <PerfectZoom
          allowDownload
          source={{ ...source }}
          placement="right"
          align="start"
          rectangleStyles={{ color: '#fff', size: 3 }}
        />
        <Paragraph length={3} />
      </div>
      <Paragraph length={3} />
      <Paragraph length={3} />
    </Fragment>
  );
}
