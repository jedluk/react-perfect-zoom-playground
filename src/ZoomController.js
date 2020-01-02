import React from 'react';
import logo from './logo.svg';

const PerfectZoomController = ({ zoomState, setZoomState }) => {
  function setTranslate(coordinate, value) {
    setZoomState({
      ...zoomState,
      translate: {
        ...zoomState.translate,
        [coordinate]: zoomState.translate[coordinate] + value
      }
    });
  }
  function setBorderSize(value) {
    setZoomState({
      ...zoomState,
      rectangleStyles: {
        ...zoomState.rectangleStyles,
        size: zoomState.rectangleStyles.size + value
      }
    });
  }
  function setColor(e) {
    setZoomState({
      ...zoomState,
      rectangleStyles: {
        ...zoomState.rectangleStyles,
        color: e.target.value
      }
    });
  }
  function setPlacement(e) {
    setZoomState({ ...zoomState, placement: e.target.value });
  }
  function setMargin(value) {
    setZoomState({ ...zoomState, margin: zoomState.margin + value });
  }
  return (
    <div className="App-header">
      <div>
        <h2>Perfect zoom controller</h2>
        <h4 className="inline-block">TranslateX: {zoomState.translate.x} &nbsp;</h4>
        <button onClick={() => setTranslate('x', -50)}>-</button>
        <button onClick={() => setTranslate('x', +50)}>+</button>
        <br />
        <h4 className="inline-block">TranslateY: {zoomState.translate.y} &nbsp;</h4>
        <button onClick={() => setTranslate('y', -50)}>-</button>
        <button onClick={() => setTranslate('y', +50)}>+</button>
        <br />
        <h4 className="inline-block">Border size: {zoomState.rectangleStyles.size} &nbsp;</h4>
        <button onClick={() => setBorderSize(-1)}>-</button>
        <button onClick={() => setBorderSize(+1)}>+</button>
        <br />
        <h4 className="inline-block">Margin: {zoomState.margin}&nbsp;</h4>
        <button onClick={() => setMargin(-2)}>-</button>
        <button onClick={() => setMargin(+2)}>+</button>
        <br />
        <h4 className="inline-block">Placement: &nbsp;</h4>
        <select value={zoomState.placement} onChange={setPlacement}>
          <option value="top">top</option>
          <option value="right">right</option>
          <option value="bottom">bottom</option>
          <option value="left">left</option>
        </select>
        <br />
        <br />
        <h4 className="inline-block" style={{ color: zoomState.color }}>
          Rectangle border: {zoomState.color}
          &nbsp;
          <input type="color" value={zoomState.rectangleStyles.color} onChange={setColor} />
        </h4>
      </div>
      <div className="header-logo">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
};

export default PerfectZoomController;
