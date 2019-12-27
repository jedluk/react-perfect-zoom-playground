import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PerfectZoom from '../../react-perfect-zoom/src';
import Paragraph from './Paragraph';
import sample from './assets/sample2.jpg';

const PLACEMENT_LEFT = true;

function App() {
  const [translateX, addX] = useState(0);
  const [translateY, addY] = useState(0);
  const [color, setColor] = useState('#eca303');
  const [size, setSize] = useState(1);
  const [placement, setPlacement] = useState('right');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div style={{ position: 'fixed', top: 10, left: 20 }}>
        <button onClick={() => addX(translateX - 50)}>-</button>
        {'translateX: ' + translateX + ' '}
        <button onClick={() => addX(translateX + 50)}>+</button>
        <br />
        <br />
        <button onClick={() => addY(translateY - 50)}>-</button>
        {'translateY:' + translateY + ' '}
        <button onClick={() => addY(translateY + 50)}>+</button>
        <br />
        <br />
        <input type="color" value={color} onChange={e => setColor(e.target.value)} />
        &nbsp;
        <span style={{ color }}> Current color: {color}</span>
        <br />
        <br />
        <button onClick={() => setSize(size - 1)}>-</button>
        {' border size: ' + size + ' '}
        <button onClick={() => setSize(size + 1)}>+</button>
        <br />
        <br />
        Placement: &nbsp;
        <select value={placement} onChange={e => setPlacement(e.target.value)}>
          <option value="top">top</option>
          <option value="right">right</option>
          <option value="bottom">bottom</option>
          <option value="left">left</option>
        </select>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row-reverse',
          [PLACEMENT_LEFT ? 'marginLeft' : 'marginRight']: 20,
          margin: 20
        }}
      >
        <PerfectZoom
          placement={placement}
          source={sample}
          thumbnailSize={[300, 500]}
          rectangleStyles={{ color, size }}
          translate={{
            x: translateX,
            y: translateY
          }}
        />
        <Paragraph />
        <Paragraph />
        <Paragraph />
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
