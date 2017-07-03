import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import Slider, { createSliderWithTooltip } from 'rc-slider';
import './SliderStyle.scss';
// import 'rc-slider/assets/index.css';

export default class SliderSettings extends React.Component {
  render () {
    return (
      <div className="block">
      <p className="device_name">Range</p>
      <div className="min_slider_value">min</div>
      <div className="max_slider_value">max</div>
      <div className="slider">
      <input type="range" id="range_input"
      min="0" max="100" step="10" value="50"
      onChange="rangevalue.value=value" />
      <output id="range_value">50</output>
      </div>
      <button className="delete_slider"></button>
      </div>
    );
  }
}
