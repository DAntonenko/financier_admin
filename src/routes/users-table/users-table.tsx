import * as React from 'react';
import './users-table.css';
import { SimpleLoader } from '../../components/simple-loader/simple-loader';
import { Button, EButtonAppearance, EButtonIcon } from '../../components/controls/button/button';
import { User } from './user/user';
import { Checkbox } from '../../components/controls/checkbox/checkbox';
import { Modal } from '../../components/modal/modal';

interface IUsersTableState {
  isConfirmRemoveModalOpen: boolean;
  isConfirmSaveChangesModalOpen: boolean;
}

export class UsersTable extends React.Component<{}, IUsersTableState> {

  public state: IUsersTableState = {
    isConfirmRemoveModalOpen: false,
    isConfirmSaveChangesModalOpen: false,
  }

  public render() {
    const {
      isConfirmRemoveModalOpen,
      isConfirmSaveChangesModalOpen,
    } = this.state;

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
        <footer className='users-table__footer'>
          <Button
            className='users-table__remove-users-button'
            appearance={EButtonAppearance.GHOST}
            // disabled={true}
            text='Удалить выбранных пользователей'
            onClick={this.onRemoveUsersButtonClick}
          />
          <Button
            className='users-table__add-user-button'
            appearance={EButtonAppearance.LIGHT}
            icon={EButtonIcon.ADD}
            text='Добавить пользователя'
          />
          <Button
            className='users-table__save-changes-button'
            // disabled={true}
            text='Сохранить изменения'
            onClick={this.onSaveChangesButtonClick}
          />
        </footer>
        {
          isConfirmRemoveModalOpen &&
          <Modal
            headerText='Удалить пользователей?'
          >
            <Button
              className='users-table__modal-cancel-button'
              text='Отмена'
              appearance={EButtonAppearance.GHOST}
            />
            <Button
              text='Удалить'
            />
          </Modal>
        }
        {
          isConfirmSaveChangesModalOpen &&
          <Modal
            headerText='Сохранить изменения?'
          >
            <Button
              className='users-table__modal-cancel-button'
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

  private onRemoveUsersButtonClick = () => {
    this.setState({
      isConfirmRemoveModalOpen: true,
    })
  };

  private onSaveChangesButtonClick = () => {
    this.setState({
      isConfirmSaveChangesModalOpen: true,
    })
  };
}
