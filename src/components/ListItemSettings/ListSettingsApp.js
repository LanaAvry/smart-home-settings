import React from 'react';
import {Link} from 'react-router';
import Settings from '../../pages/Builder/Builder';

export default class SettingsApp extends React.Component {
  render () {
    return (
            <div className="main-container">
                <div className="sidebar"><h2>Menu</h2>
                    <div className="sidebar__links">
                    <ul>
                        <li><Link to="/settings/slider">Slider</Link></li>
                        <li><Link to="/settings/toggle">Toggle</Link></li>
                        <li><Link to="/settings/timer">Timer</Link></li>
                        <li><Link to="/settings/graph">Graph</Link></li>
                        <li><Link to="/settings/value">Value</Link></li>
                    </ul>
                    </div>
                  {this.props.children}
              </div>
            </div>
    );
  }
}
