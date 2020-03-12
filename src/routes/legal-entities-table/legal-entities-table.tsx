import * as React from 'react';
import './legal-entities-table.css';
import { SimpleLoader } from '../../components/simple-loader/simple-loader';
import { Button } from '../../components/controls/button/button';
import { LegalEntity } from './legal-entity/legal-entity';
import { Checkbox } from '../../components/controls/checkbox/checkbox';

export class LegalEntitiesTable extends React.Component {

  public render() {
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
      </section>
    );
  }
}
