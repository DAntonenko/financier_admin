import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './finctrl.css';
import {Authorization} from './routes/authorization/authorization';
import { Users } from './routes/users/users';
import { AdminPanel } from './routes/admin-panel/admin-panel';

class Root extends Component {
  render() {
    return (
      <div>
        {/* <Authorization /> */}
        <AdminPanel />
        {/* <Users /> */}
      </div>
    );
  };
}

var mountNode = document.getElementById("app");
ReactDOM.render(<Root />, mountNode);
