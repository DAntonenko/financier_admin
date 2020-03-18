import * as React from 'react';
import './legal-entity.css';
import { Checkbox } from '../../../components/controls/checkbox/checkbox';
import { EditableText } from '../../../components/controls/editable-text/editable-text';

export class LegalEntity extends React.Component {

  public render() {
    return (
      <tr>
        <td className='legal-entity__checkbox-container'>
          <Checkbox
            state={true}
          />
        </td>
        <td>
          <EditableText
            content='ООО "Хуйня полная"'
          />
        </td>
        <td>
          <EditableText
            content='Курмангалиев Эрик Салимович'
          />
        </td>
        <td>
          <EditableText
            content='народный артист Республики Казахстан'
          />
        </td>
        <td>
          <EditableText
            content='123456789'
          />
        </td>
        <td>
          <EditableText
            content='1234567890'
          />
        </td>
        <td>
          <EditableText
            content='Цыго-банк'
          />
        </td>
        <td>
          <EditableText
            content='123456'
          />
        </td>
        <td>
          <EditableText
            content='Ваганьковское кладбище'
          />
        </td>
        <td>
          <EditableText
            content='Ваганьковское кладбище'
          />
        </td>
        <td>
          <EditableText
            content='123456'
          />
        </td>
        <td>
          <EditableText
            content='123456789'
          />
        </td>
        <td>
          <EditableText
            content='1234567890123'
          />
        </td>
      </tr>
    )
  }
}
