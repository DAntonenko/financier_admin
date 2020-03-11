import * as React from 'react';
import { mergeClassNames } from '../../../utils/merge-class-names/merge-class-names';
import './text-input.css';

export interface ITextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  cancelable?: boolean;
  isError?: boolean;
  error?: string;
  helpMessage?: string;
  containerClassName?: string;
  id?: string;
}

export class TextInput extends React.Component<ITextInputProps> {
  public inputRef: HTMLInputElement | undefined;

  public render()  {
    const {
      label,
      cancelable,
      isError,
      error,
      helpMessage,
      containerClassName,
      id,
      ...restProps
    } = this.props;

    return (
      <div
        className={mergeClassNames([
          'text-input__wrapper',
          containerClassName,
          this.props.disabled ? 'text-input--disabled' : '',
        ])}
      >
        {
          label !== undefined &&
          <div className='text-input__label'>
            <span>{label}</span>
          </div>
        }
        <input
          type='text'
          autoComplete='off'
          {...restProps}
          ref={this.setInputRef}
          className={ mergeClassNames([
            'text-input',
            cancelable ? 'text-input--with-icons' : '',
            isError ? 'text-input--error' : '',
            this.props.className,
          ]) }
          id={id}
        />
        {
          cancelable && isError ?
          <div className='text-input__icons-wrapper'>
            <div
              className='text-input__icon-close'
              onClick={this.onInputClear}
            />
          </div>
          :
          cancelable &&
          <div className='text-input__icons-wrapper'>
            <div className='text-input__icon-add' />
            <div
              className='text-input__icon-close'
              onClick={this.onInputClear}
            />
          </div>
        }
        {
          isError &&
            <p className='text-input__error-message'>{error}</p>
        }
        {
          error === undefined && helpMessage !== undefined &&
          <p className='text-input__help-message'>{helpMessage}</p>
        }
      </div>
    );
  }

  private readonly setInputRef = (node: HTMLInputElement): void => {
    this.inputRef = node;
  }

  private onInputClear = () => {
    const {
      onChange,
    } = this.props;
    // this.inputRef.value = '';
    const event = new Event('change');
    if (onChange) {
      onChange({
        ...event,
        currentTarget: this.inputRef,
        target: this.inputRef,
      } as any);
    }
  }
}
