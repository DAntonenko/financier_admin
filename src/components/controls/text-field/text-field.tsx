import * as React from 'react';
import { mergeClassNames } from '../../../utils/merge-class-names';
import { TextInput } from '../text-input/text-input';

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
      <div
        className='text-field'
      >
        {
          isFocused ?
          <TextInput
            value={content}
            onBlur={this.turnEditModeOff}
          /> :
          <p onClick={this.turnEditModeOn}>
            {content}
          </p>
        }
      </div>
    );
  }

  private turnEditModeOn = () => {
    this.setState({
      isFocused: true,
    });
  }

  private turnEditModeOff = () => {
    this.setState({
      isFocused: false,
    });
  }
}

