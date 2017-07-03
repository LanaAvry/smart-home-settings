import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './GraphStyle.scss';

export default class GraphSettings extends React.Component {
  render () {
    return (
      <div className="graph_block">
      <p className="device_name">Graph</p>
      <div className="graph_img" />
      <button className="delete_graph"></button>
      </div>
    );
  }
}
