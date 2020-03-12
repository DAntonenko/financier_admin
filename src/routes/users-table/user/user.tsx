import * as React from 'react';
import './user.css';
import { EllipsisTooltip } from '../../../components/ellipsis-tooltip/ellipsis-tooltip';
import { Checkbox } from '../../../components/controls/checkbox/checkbox';
import { TextInput } from '../../../components/controls/text-input/text-input';
import { TextField } from '../../../components/controls/text-field/text-field';

export class User extends React.Component {

  public render() {
    return (
      <tr>
        <td className='user__checkbox-container'>
          <Checkbox
            state={true}
          />
        </td>
        <td>
          <TextField
            content='Юлий'
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
