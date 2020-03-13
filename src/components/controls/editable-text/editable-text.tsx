import * as React from 'react';
import { mergeClassNames } from '../../../utils/merge-class-names';
import { TextInput } from '../text-input/text-input';
import './editable-text.css';

export enum EEditableTextContentType {
  TEXT = 0,
  NUMBER = 1,
  PASSWORD = 2,
}

export interface IEditableTextProps extends React.Component {
  content: string;
  contentType?: EEditableTextContentType;
}

export interface IEditableTextState {
  isFocused: boolean;
  editedContent: string;
}

export class EditableText extends React.Component<IEditableTextProps, IEditableTextState> {
  public static defaultProps = {
    contentType: EEditableTextContentType.TEXT
  };

  public state: IEditableTextState = {
    isFocused: false,
    editedContent: '',
  }

  public textInputRef: TextInput | undefined;

  public render()  {
    const {
      content,
      contentType,
      ...restProps
    } = this.props;

    const {
      isFocused,
    } = this.state;

    return (
      <div className='editable-text'>
        {
          isFocused ?
          <TextInput
            value={this.state.editedContent ? this.state.editedContent : content}
            onBlur={this.turnEditModeOff}
            ref={ this.setTextInputRef }
            onChange={this.onInputChange}
          /> :
          <p
            className='editable-text__content-output'
            onClick={this.turnEditModeOn}
          >
            {content}
          </p>
        }
      </div>
    );
  }

  private turnEditModeOn = () => {
    this.setState({
      isFocused: true,
    }, () => {
      if (this.textInputRef && this.textInputRef.inputRef) {
        this.textInputRef.inputRef.focus();
      }
    });
  }

  private turnEditModeOff = () => {
    this.setState({
      isFocused: false,
    });
  }

  private onInputChange = () => {
    this.setState({
      editedContent: this.textInputRef.inputRef.value,
    })
  }

  private readonly setTextInputRef = (node: TextInput): void => {
    this.textInputRef = node;
  }
}
