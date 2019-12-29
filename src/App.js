import React, { useState } from 'react';
import PerfectZoomController from './ZoomController';
import Media from 'react-media';
import Page from './Page';

function App() {
  const [zoomState, setZoomState] = useState({
    placement: 'right',
    rectangleStyles: {
      color: '#61dafb',
      size: 2
    },
    translate: {
      x: 0,
      y: 0
    },
    margin: 20
  });
  return (
    <div className="App">
      <PerfectZoomController zoomState={zoomState} setZoomState={setZoomState} />
      <Media
        queries={{
          small: '(max-width: 859px)',
          medium: '(min-width: 860px) and (max-width: 1199px)',
          large: '(min-width: 1200px)'
        }}
      >
        {match => <Page match={match} perfectZoomState={zoomState} />}
      </Media>
    </div>
  );
}

export default App;
