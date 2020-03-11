import * as React from 'react';
import './users.css';
import { SimpleLoader } from '../../components/simple-loader/simple-loader';
import { Button } from '../../components/controls/button/button';
import { User } from './user/user';
import { Checkbox } from '../../components/controls/checkbox/checkbox';

export class Users extends React.Component {

  public render() {
    return (
      <section className='users'>
        {
          false &&
          <div className='users__preloader'>
            <SimpleLoader className='users__preloader-image' />
          </div>
        }
        <table className='users__table'>
          <thead>
            <tr>
              <th className='users_checkbox-container'>
                <Checkbox
                  state={true}
                />
              </th>
              <th>Имя</th>
              <th>Фамилия</th>
              <th>e-mail</th>
              <th>Роль</th>
              <th>Пароль</th>
            </tr>
          </thead>
          <tbody>
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
          </tbody>
        </table>
      </section>
    );
  }
}
