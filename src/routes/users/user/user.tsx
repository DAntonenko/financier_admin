import * as React from 'react';
import './user.css';
import { EllipsisTooltip } from '../../../components/ellipsis-tooltip/ellipsis-tooltip';
import { Checkbox } from '../../../components/controls/checkbox/checkbox';
import { TextInput } from '../../../components/controls/text-input/text-input';

export class User extends React.Component {

  public render() {
    return (
      <tr>
        <td className='user_checkbox-container'>
          <Checkbox
            state={true}
          />
        </td>
        <td>
          <TextInput
            value='Юлий'
          />
        </td>
        <td>
          <TextInput
            value='Цезарь'
          />
        </td>
        <td>
          <TextInput
            value='caesar@spqr.gov'
          />
        </td>
        <td>
          <TextInput
            value='Сотрудник отдела продаж'
          />
        </td>
        <td>
          <TextInput
            value='morituri te salutant!'
          />
        </td>
      </tr>
    )
  }
}
