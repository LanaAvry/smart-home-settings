import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './ToggleStyle.scss';

export default class ToggleSettings extends React.Component {
  render () {
    return (
      <div className="toggle_block">
      <div className="onoffswitch">
    <input type="checkbox" className="onoffswitch onoffswitch-checkbox"
    d="myonoffswitch" checked />
    <label className="onoffswitch-label" for="myonoffswitch">
        <span className="onoffswitch-inner"></span>
        <span className="onoffswitch-switch"></span>
    </label>
  </div>
     <p className="switch_name">Switch on/off</p>
      </div>
    );
  }
}
