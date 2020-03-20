import * as React from 'react';
import './legal-entities-table.css';
import { SimpleLoader } from '../../components/simple-loader/simple-loader';
import { Button, EButtonAppearance, EButtonIcon } from '../../components/controls/button/button';
import { LegalEntity } from './legal-entity/legal-entity';
import { Checkbox } from '../../components/controls/checkbox/checkbox';
import { Modal } from '../../components/modal/modal';

interface ILegalEntitiesTableState {
  isConfirmRemoveModalOpen: boolean;
  isConfirmSaveChangesModalOpen: boolean;
}

export class LegalEntitiesTable extends React.Component<{}, ILegalEntitiesTableState> {

  public state: ILegalEntitiesTableState = {
    isConfirmRemoveModalOpen: false,
    isConfirmSaveChangesModalOpen: false,
  }

  public render() {
    const {
      isConfirmRemoveModalOpen,
      isConfirmSaveChangesModalOpen,
    } = this.state;

    return (
      <section className='legal-entities-table'>
        {
          false &&
          <div className='legal-entities-table__preloader'>
            <SimpleLoader className='legal-entities-table__preloader-image' />
          </div>
        }
        <table className='legal-entities-table__table'>
          <thead>
            <tr>
              <th className='legal-entities-table__checkbox-container'>
                <Checkbox
                  state={true}
                />
              </th>
              <th>Название юрлица</th>
              <th>ФИО представителя</th>
              <th>Должность представителя</th>
              <th>КПП</th>
              <th>ИНН</th>
              <th>Банк</th>
              <th>к/c</th>
              <th>Фактический адрес</th>
              <th>Юридический адрес</th>
              <th>р/c</th>
              <th>БИК</th>
              <th>ОГРН</th>
            </tr>
          </thead>
          <tbody>
            <LegalEntity />
            <LegalEntity />
            <LegalEntity />
            <LegalEntity />
            <LegalEntity />
            <LegalEntity />
            <LegalEntity />
            <LegalEntity />
            <LegalEntity />
            <LegalEntity />
            <LegalEntity />
            <LegalEntity />
            <LegalEntity />
            <LegalEntity />
            <LegalEntity />
            <LegalEntity />
            <LegalEntity />
            <LegalEntity />
            <LegalEntity />
            <LegalEntity />
            <LegalEntity />
            <LegalEntity />
            <LegalEntity />
            <LegalEntity />
            <LegalEntity />
            <LegalEntity />
            <LegalEntity />
            <LegalEntity />
            <LegalEntity />
          </tbody>
        </table>
        <footer className='legal-entities-table__footer'>
          <Button
            className='legal-entities-table__remove-entities-button'
            appearance={EButtonAppearance.GHOST}
            // disabled={true}
            text='Удалить выбранные юрлица'
            onClick={this.onRemoveEntitiesButtonClick}
          />
          <Button
            className='legal-entities-table__add-entity-button'
            appearance={EButtonAppearance.LIGHT}
            icon={EButtonIcon.ADD}
            text='Добавить юрлицо'
          />
          <Button
            className='legal-entities-table__save-changes-button'
            // disabled={true}
            text='Сохранить изменения'
            onClick={this.onSaveChangesButtonClick}
          />
        </footer>
        {
          isConfirmRemoveModalOpen &&
          <Modal
            headerText='Удалить юрлица?'
          >
            <Button
              className='legal-entities-table__modal-cancel-button'
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

  private onRemoveEntitiesButtonClick = () => {
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
