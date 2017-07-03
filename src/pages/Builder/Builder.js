import React, { Component } from 'react';
import SliderSettings from
'../../components/ListItemSettings/SliderSettings/Slider';
import ToggleSettings from
'../../components/ListItemSettings/ToggleSettings/Toggle';
import TimerSettings from
'../../components/ListItemSettings/TimerSettings/Timer';
import GraphSettings from
'../../components/ListItemSettings/GraphSettings/Graph';
import ValueSettings from
'../../components/ListItemSettings/ValueSettings/Value';

export default class Settings extends Component {
  render () {
    return (
      <div>
        <SliderSettings/>
        <ToggleSettings/>
        <TimerSettings/>
        <GraphSettings/>
        <ValueSettings/>
      </div>
    );
  }
}
