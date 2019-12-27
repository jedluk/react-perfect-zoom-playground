import React, { useState, Fragment } from 'react';
import PerfectZoomController from './ZoomController';
import FlexController from './FlexController';
import logo from './logo.svg';
import './App.css';
import PerfectZoom from '../../react-perfect-zoom/src';
import Paragraph from './Paragraph';
import sample from './assets/sample2.jpg';

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
    }
  });
  const [flexDirection, setFlexDirection] = useState('random');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <PerfectZoomController zoomState={zoomState} setZoomState={setZoomState} />
      <div className="flex-area" style={{ flexDirection }}>
        {'random' === flexDirection && (
          <Fragment>
            <Paragraph />
            <Paragraph />
          </Fragment>
        )}
        <PerfectZoom
          placement={zoomState.placement}
          source={sample}
          thumbnailSize={[300, 500]}
          rectangleStyles={zoomState.rectangleStyles}
          translate={zoomState.translate}
        />
        <Paragraph />
        <Paragraph />
        <FlexController flexDirection={flexDirection} setFlexDirection={setFlexDirection} />
      </div>
      <Paragraph />
      <Paragraph />
      <Paragraph />
      <Paragraph />
      <Paragraph />
    </div>
  );
}

export default App;
