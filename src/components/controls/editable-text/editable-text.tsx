import * as React from 'react';
import { mergeClassNames } from '../../../utils/merge-class-names';
import { TextInput } from '../text-input/text-input';
import './editable-text.css';
import { EllipsisTooltip } from '../../ellipsis-tooltip/ellipsis-tooltip';

export enum EEditableTextContentType {
  TEXT = 0,
  NUMBER = 1,
  PASSWORD = 2,
}

export interface IEditableTextProps extends React.Component {
  content: string;
  // onChange: void;
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
    editedContent: this.props.content,
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
      editedContent,
    } = this.state;

    return (
      <div className='editable-text'>
        {
          isFocused ?
          <TextInput
            value={editedContent}
            ref={ this.setTextInputRef }
            onChange={this.onInputChange}
            onBlur={this.turnEditModeOff}
            onKeyDownCapture={this.onEnterPress}
          />
          :
          <p
            className='editable-text__content-output'
            onClick={this.turnEditModeOn}
          >
            <EllipsisTooltip>
              {
                contentType === EEditableTextContentType.PASSWORD ?
                content.replace(/./g, '\u00b7') :
                content
              }
            </EllipsisTooltip>
          </p>
        }
      </div>
    );
  }

  // private setInputType = (contentType: EEditableTextContentType) => {
  //   switch (contentType) {
  //     case EEditableTextContentType.TEXT:
  //       return (
  //         <TextInput
  //           value={this.state.editedContent}
  //           ref={ this.setTextInputRef }
  //           onChange={this.onInputChange}
  //           onBlur={this.turnEditModeOff}
  //           onKeyDownCapture={this.onEnterPress}
  //         />
  //       );
  //     case EEditableTextContentType.NUMBER:
  //       return (
  //         <NumberInput
  //           value={this.state.editedContent}
  //           ref={ this.setTextInputRef }
  //           onChange={this.onInputChange}
  //           onBlur={this.turnEditModeOff}
  //           onKeyDownCapture={this.onEnterPress}
  //         />
  //       );
  //    }
  //  }

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

  private onEnterPress = (event) => {
    if (event.key === 'Enter') {
      if (this.state.editedContent !== '') {
          console.log(this.state.editedContent);
        };
      this.turnEditModeOff();
    }
  }

  private readonly setTextInputRef = (node: TextInput): void => {
    this.textInputRef = node;
  }
}
