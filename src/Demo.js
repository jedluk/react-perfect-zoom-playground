import React, { Fragment } from 'react';
import Paragraph from './Paragraph';
import PerfectZoom from 'react-perfect-zoom';
import Loader from './Loader';
import Media from 'react-media';
import smallCookie from './assets/cookie_small.jpg';
import largeCookie from './assets/cookie_large.jpg';

const source = {
  thumbnailURL: smallCookie,
  thumbnailSize: [300, 500],
  imageURL: largeCookie
};

export default function Demo(props) {
  return (
    <Media
      queries={{
        small: '(max-width: 859px)',
        medium: '(min-width: 860px) and (max-width: 1024px)',
        large: '(min-width: 1025px)'
      }}
    >
      {match => (
        <Fragment>
          <div className="demo-content">
            <PerfectZoom
              allowDownload
              source={{
                ...source,
                thumbnailSize: match.small ? [150, 250] : match.medium ? [250, 416] : [300, 500]
              }}
              loader={Loader}
              placement={match.large ? 'right' : 'bottom'}
              align={match.large ? 'start' : 'center'}
              rectangleStyles={{ color: '#fff', size: 3 }}
            />
            <Paragraph length={3} />
          </div>
          {!match.small && (
            <Fragment>
              <Paragraph length={3} />
              <Paragraph length={3} />
            </Fragment>
          )}
        </Fragment>
      )}
    </Media>
  );
}
