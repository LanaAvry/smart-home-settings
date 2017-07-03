require('./scss/index.scss');
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Settings from './pages/Builder/Builder';
import SettingsApp from './components/ListItemSettings/ListSettingsApp';
import SliderSettings from
'./components/ListItemSettings/SliderSettings/Slider';
import ToggleSettings from
'./components/ListItemSettings/ToggleSettings/Toggle';
import TimerSettings from
'./components/ListItemSettings/TimerSettings/Timer';
import GraphSettings from
'./components/ListItemSettings/GraphSettings/Graph';
import ValueSettings from
'./components/ListItemSettings/ValueSettings/Value';

render(
  <Router history={browserHistory}>
        <Route path='/' component={SettingsApp} >
            <Route path='/settings'>
                <Route path='slider' component={SliderSettings} />
                <Route path='toggle' component={ToggleSettings} />
                <Route path='timer' component={TimerSettings} />
                <Route path='graph' component={GraphSettings} />
                <Route path='value' component={ValueSettings} />
            </Route>
        </Route>
    </Router>,
  document.getElementById('root')
);
