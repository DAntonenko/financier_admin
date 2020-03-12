import * as React from 'react';
import './legal-entity.css';
import { EllipsisTooltip } from '../../../components/ellipsis-tooltip/ellipsis-tooltip';
import { Checkbox } from '../../../components/controls/checkbox/checkbox';
import { TextInput } from '../../../components/controls/text-input/text-input';
import { NumberInput } from '../../../components/controls/number-input/number-input';

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
          <TextInput
            value='ООО "Хуйня полная"'
          />
        </td>
        <td>
          <TextInput
            value='Курмангалиев Эрик Салимович'
          />
        </td>
        <td>
          <TextInput
            value='народный артист Республики Казахстан'
          />
        </td>
        <td>
          <NumberInput
            value='123456'
          />
        </td>
        <td>
          <NumberInput
            value='123456'
          />
        </td>
        <td>
          <TextInput
            value='Цыго-банк'
          />
        </td>
        <td>
          <NumberInput
            value='123456'
          />
        </td>
        <td>
          <TextInput
            value='Ваганьковское кладбище'
          />
        </td>
        <td>
          <TextInput
            value='Ваганьковское кладбище'
          />
        </td>
        <td>
          <NumberInput
            value='123456'
          />
        </td>
        <td>
          <NumberInput
            value='123456'
          />
        </td>
        <td>
          <NumberInput
            value='123456'
          />
        </td>
      </tr>
    )
  }
}
