import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './ValueStyle.scss';

export default class ValueSettings extends React.Component {
  render () {
    return (
      <div className="value_block">
      <p className="device_name">Value</p>
      <input type="text" className="value_input" placeholder="Search..."/>
      <button className="delete_value"></button>
      </div>
    );
  }
}
