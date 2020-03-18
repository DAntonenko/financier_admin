import * as React from 'react';
import './user.css';
import { Checkbox } from '../../../components/controls/checkbox/checkbox';
import { EditableText, EEditableTextContentType } from '../../../components/controls/editable-text/editable-text';

export interface IUserState {
  editableTextContent: string;
}

export class User extends React.Component<{}, IUserState> {

  // public onEditableTextChange = () => {
  //   this.setState({
  //     editableTextContent: this.state.editedContent;
  //   })
  // }

  public render() {
    return (
      <tr>
        <td className='user__checkbox-container'>
          <Checkbox
            state={true}
          />
        </td>
        <td>
          <EditableText
            content='Юлий'
            // onChange={this.onEditableTextChange}
          />
        </td>
        <td>
          <EditableText
            content='Цезарь'
          />
        </td>
        <td>
          <EditableText
            content='caesar@spqr.gov'
          />
        </td>
        <td>
          <EditableText
            content='Сотрудник отдела продаж'
          />
        </td>
        <td>
          <EditableText
            contentType={EEditableTextContentType.PASSWORD}
            content='morituri te salutant!'
          />
        </td>
      </tr>
    )
  }
}
