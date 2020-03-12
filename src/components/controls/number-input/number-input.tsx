import * as React from 'react';

import {
  ITextInputProps,
  TextInput,
} from '../text-input/text-input';
import { formatNumber } from '../../../utils/format-number';

interface INumberInputState {
  value: string;
}

interface INumberInputProps extends ITextInputProps {
  min?: number;
  max?: number;
}

export class NumberInput extends React.Component<INumberInputProps, INumberInputState> {

  public state: INumberInputState = {
    value: this.props.value !== undefined ? this.props.value.toString() : '',
  };

  public textInputRef: TextInput | undefined;

  public componentWillReceiveProps(nextProps: INumberInputProps) {
    this.setState({
      value: nextProps.value !== undefined ? nextProps.value.toString() : '',
    });
  }

  public render()  {
    const {
      value,
    } = this.state;

    return (
      <TextInput
        { ...this.props }
        ref={ this.setTextInputRef }
        value={  formatNumber(value) }
        onChange={ this.onValueChange }
        onBlur={ this.onBlur }
      />
    );
  }

  private readonly onValueChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (this.textInputRef && this.textInputRef.inputRef) {
      event.persist();

      const {
        target: {
          value,
        },
      } = event;

      const {
        onChange,
        min,
        max,
      } = this.props;

      const numberWithoutSpaces = value.replace(/ /g, '');

      let clearedValue: string = numberWithoutSpaces;

      if (min) {
        if (Number(clearedValue) < min) {
          clearedValue = min.toString();
        }
      }

      if (max) {
        if (Number(clearedValue) > max) {
          clearedValue = max.toString();
        }
      }

      const preparedValue = this.prepareValue(clearedValue);
      const oldValueLength = value.length;
      const newValueLength = formatNumber(preparedValue).length;
      const currentSelection = this.textInputRef.inputRef.selectionStart
        ? this.textInputRef.inputRef.selectionStart
        : 0;
      const newSelection = newValueLength - oldValueLength + currentSelection;
      this.setState({
        value: preparedValue,
      }, () => {
        if (onChange) {
          event.target.value = preparedValue.replace(/ /g, '');
          onChange(event);
        }
        setTimeout(() => {
          if (this.textInputRef && this.textInputRef.inputRef) {
            this.textInputRef.inputRef.setSelectionRange(newSelection, newSelection);
          }
        });
      });
    }
  }

  private readonly onBlur = (): void => {
    this.setState((prevState: INumberInputState) => {
      let preparedValue = prevState.value;

      if (preparedValue !== '0') {
        preparedValue = preparedValue.replace(/\,0+$/, '');
      }

      preparedValue = preparedValue.endsWith(',')
        ? preparedValue.slice(0, preparedValue.length - 1)
        : preparedValue;

      if (preparedValue !== '0') {
        if (preparedValue.startsWith('0') && !preparedValue.startsWith('0,')) {
          preparedValue = preparedValue.replace(/^0+/, '');
        }

        if (preparedValue.startsWith(',')) {
          preparedValue = preparedValue.slice(1, preparedValue.length);
        }

        // preparedValue = preparedValue.replace(/0+$/, "");
      }

      return {
        value: preparedValue,
      };
    });
  }

  private readonly prepareValue = (value: string): string => {
    let preparedValue = value.replace(/,/g, '.');

    const preparedNumberValue = preparedValue.replace(/[^0-9\.]/gim, '');

    preparedValue = preparedNumberValue;

    let isSeparatorExist = false;

    preparedValue = preparedValue.split('')
      .map((char: string): string => {
        if (char === '.') {
          if (isSeparatorExist) {
            return '';
          }

          isSeparatorExist = true;
        }

        return char;
      })
      .join('');

    return preparedValue;
  }

  private readonly setTextInputRef = (node: TextInput): void => {
    this.textInputRef = node;
  }
}
