import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './TimerStyle.scss';

export default class TimerSettings extends React.Component {
  render () {
    return (
      <div className="timer_block">
      <p className="device_name">Timer</p>
      <div class="quantity">
     <input type="time" className="timer_set" min="1" max="24" step="1"
     value="12:01:00;"/>
      </div>
      <button className="delete_timer"></button>
      </div>
    );
  }
}

