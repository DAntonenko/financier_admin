import * as React from 'react';
import './accounts-monitoring-table.css';
import { Account } from './account/account';
import { SimpleLoader } from '../../components/simple-loader/simple-loader';
import { Button, EButtonAppearance } from '../../components/controls/button/button';
import { Modal } from '../../components/modal/modal';

interface IAccountsMonitoringTableState {
  isConfirmSaveChangesModalOpen: boolean;
}

export class AccountsMonitoringTable extends React.Component<{}, IAccountsMonitoringTableState> {

  public state: IAccountsMonitoringTableState = {
    isConfirmSaveChangesModalOpen: false,
  }

  public render() {
    const {
      isConfirmSaveChangesModalOpen,
    } = this.state;

    return (
      <section className='accounts-monitoring-table'>
        {
          false &&
          <div className='accounts-monitoring-table__preloader'>
            <SimpleLoader className='accounts-monitoring-table__preloader-image' />
          </div>
        }
        <table className='accounts-monitoring-table__table'>
          <thead>
            <tr>
              <th />
              <th>Номер аккаунта</th>
              <th className='accounts-monitoring-table__heading-email'>E-mail</th>
              <th>Юрлицо плательщика</th>
              <th>Тариф</th>
              <th>Платный или бесплатный</th>
              <th>Куплено внедрение</th>
              <th>Менеджер</th>
              <th>Менеджер внедрения</th>
              <th>Было ли внедрение</th>
              <th>Скидка</th>
              <th>Количество юрлиц</th>
              <th>Количество пользователей</th>
              <th>Дата завершения подписки</th>
              <th>Пользуется бесплатно</th>
              <th>Партнёры</th>
              <th>Дата регистрации</th>
              <th>Дата последнего входа</th>
              <th>Даты платежей</th>
              <th>Комментарий</th>
              <th>Промокод</th>
              <th>Рефёрер</th>
              <th>Источник кампании</th>
              <th>Тип трафика</th>
              <th>Название кампании</th>
              <th>Идентификатор объявления</th>
              <th>Ключевое слово</th>
            </tr>
          </thead>
          <tbody>
            <Account />
            <Account />
            <Account />
            <Account />
            <Account />
            <Account />
            <Account />
            <Account />
            <Account />
            <Account />
            <Account />
            <Account />
            <Account />
            <Account />
            <Account />
            <Account />
            <Account />
            <Account />
            <Account />
            <Account />
            <Account />
            <Account />
            <Account />
            <Account />
            <Account />
            <Account />
            <Account />
            <Account />
            <Account />
            <Account />
            <Account />
            <Account />
            <Account />
            <Account />
            <Account />
            <Account />
            <Account />
          </tbody>
        </table>
        <footer className='accounts-monitoring-table__footer'>
          <Button
            className='accounts-monitoring-table__save-changes-button'
            // disabled={true}
            text='Сохранить изменения'
            onClick={this.onSaveChangesButtonClick}
          />
        </footer>
        {
          isConfirmSaveChangesModalOpen &&
          <Modal
            headerText='Сохранить изменения?'
          >
            <Button
              className='accounts-monitoring-table__modal-cancel-button'
              text='Отмена'
              appearance={EButtonAppearance.GHOST}
            />
            <Button
              text='Сохранить'
            />
          </Modal>
        }
      </section>
    );
  }

  private onSaveChangesButtonClick = () => {
    this.setState({
      isConfirmSaveChangesModalOpen: true,
    })
  };
}
