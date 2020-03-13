import * as React from 'react';
import { mergeClassNames } from '../../../utils/merge-class-names';
import { TextInput } from '../text-input/text-input';
import './text-field.css';

export enum ETextFieldContentType {
  TEXT = 0,
  NUMBER = 1,
  PASSWORD = 2,
}

export interface ITextFieldProps extends React.Component {
  content: string;
  contentType?: ETextFieldContentType;
}

export interface ITextFieldState {
  isFocused: boolean;
}

export class TextField extends React.Component<ITextFieldProps, ITextFieldState> {
  public static defaultProps = {
    contentType: ETextFieldContentType.TEXT
  };

  public state: ITextFieldState = {
    isFocused: false,
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
      <div className='text-field'>
        {
          isFocused ?
          <TextInput
            value={content}
            onBlur={this.turnEditModeOff}
            ref={ this.setTextInputRef }
          /> :
          <p
            className='text-field__content-output'
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

  private readonly setTextInputRef = (node: TextInput): void => {
    this.textInputRef = node;
  }
}

