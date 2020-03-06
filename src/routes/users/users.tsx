import * as React from 'react';
import './users.css';
import { SimpleLoader } from '../../components/simple-loader/simple-loader';
import { Button } from '../../components/controls/button/button';
import { EllipsisTooltip } from '../../components/ellipsis-tooltip/ellipsis-tooltip';

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
              <th>Имя</th>
              <th>Фамилия</th>
              <th>e-mail</th>
              <th>Роль</th>
              <th>Пароль</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <EllipsisTooltip>
                  Юлий
                </EllipsisTooltip>
              </td>
              <td>
                <EllipsisTooltip>
                  Цезарь
                </EllipsisTooltip>
              </td>
              <td>
                <EllipsisTooltip>
                  caesar@spqr.gov
                </EllipsisTooltip>
              </td>
              <td>
                <EllipsisTooltip>
                  Сотрудник отдела продаж
                </EllipsisTooltip>
              </td>
              <td>
                <EllipsisTooltip>
                  morituri te salutant!
                </EllipsisTooltip>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  }
}
