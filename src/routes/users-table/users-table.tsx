import * as React from 'react';
import './users-table.css';
import { SimpleLoader } from '../../components/simple-loader/simple-loader';
import { Button } from '../../components/controls/button/button';
import { User } from './user/user';
import { Checkbox } from '../../components/controls/checkbox/checkbox';

export class UsersTable extends React.Component {

  public render() {
    return (
      <section className='users-table'>
        {
          false &&
          <div className='users-table__preloader'>
            <SimpleLoader className='users-table__preloader-image' />
          </div>
        }
        <table className='users-table__table'>
          <thead>
            <tr>
              <th className='users-table__checkbox-container'>
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
