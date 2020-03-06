import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './finctrl.css';
import {Authorization} from './routes/authorization/authorization';
import { Users } from './routes/users/users';

class Root extends Component {
  render() {
    return (
      <div>
        {/* <Authorization /> */}
        <Users />
      </div>
    );
  };
}

var mountNode = document.getElementById("app");
ReactDOM.render(<Root />, mountNode);
