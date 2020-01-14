import React, { Fragment, useState } from 'react';
import FlexController from './FlexController';
import PerfectZoom from 'react-perfect-zoom';
import Paragraph from './Paragraph';
import sample from './assets/sample2.jpg';

const Page = ({
  match,
  perfectZoomState: { align, placement, rectangleStyles, margin, translate }
}) => {
  const [flexDirection, setFlexDirection] = useState('row');
  return (
    <Fragment>
      {!match.small && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <FlexController flexDirection={flexDirection} setFlexDirection={setFlexDirection} />
        </div>
      )}
      <div className="flex-area" style={{ ...(!match.small && { flexDirection }) }}>
        {('center' === flexDirection || match.small) && <Paragraph />}
        <PerfectZoom
          allowDownload
          align={align}
          placement={placement || (match.small ? 'top' : 'right')}
          source={{
            thumbnailURL: sample,
            thumbnailSize: match.small ? [150, 250] : match.medium ? [200, 333] : [300, 500]
          }}
          rectangleStyles={rectangleStyles}
          margin={margin}
          translate={translate}
        />
        {!match.small && <Paragraph />}
        {('center' !== flexDirection || match.small) && <Paragraph />}
      </div>
      {!match.small && (
        <Fragment>
          <Paragraph />
          <Paragraph />
        </Fragment>
      )}
    </Fragment>
  );
};

export default Page;
