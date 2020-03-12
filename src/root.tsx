import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './finctrl.css';
import {Authorization} from './routes/authorization/authorization';
import { AdminPanel } from './routes/admin-panel/admin-panel';

class Root extends Component {
  render() {
    return (
      <div>
        {/* <Authorization /> */}
        <AdminPanel />
      </div>
    );
  };
}

var mountNode = document.getElementById("app");
ReactDOM.render(<Root />, mountNode);
