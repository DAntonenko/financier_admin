import * as React from 'react';
import { mergeClassNames } from '../../../utils/merge-class-names/merge-class-names';
import {EllipsisTooltip} from '../../ellipsis-tooltip/ellipsis-tooltip';
import './checkbox.css';

export enum ECheckboxState {
  UNCHECKED = 0,
  CHECKED = 1,
  INDETERMINATE = 2,
}

interface ICheckboxProps {
  state: boolean | ECheckboxState;
  disabled?: boolean;
  text?: string;
  className?: string;
  labelClassName?: string;
  id?: string;
  withEllipsisTooltip?: boolean;
  onChange?(state: boolean, dataset: DOMStringMap): void;
}

interface ICheckboxState {
  localState: ECheckboxState | boolean;
}

export class Checkbox extends React.Component<ICheckboxProps, ICheckboxState> {

  public state: ICheckboxState = {
    localState: this.props.state,
  };

  public componentDidUpdate() {
    if (this.props.state !== this.state.localState) {
      this.setState({ localState: this.props.state });
    }
  }

  public render() {
    const {
      className,
      text,
      onChange,
      labelClassName,
      disabled,
      state,
      ...restProps
    } = this.props;

    return (
      <label
        {...restProps}
        className={ mergeClassNames([
          'checkbox',
          disabled ? 'checkbox--disabled' : '',
          labelClassName,
        ]) }
        onClick={this.onClick}
      >
        <div
          className={ mergeClassNames([
            'checkbox__control',
            this.getStateClassName(),
            className,
          ]) }
          id={this.props.id}
        />
        {
          text !== undefined &&
            this.props.withEllipsisTooltip
              ? <p className='checkbox__label'>
                  <EllipsisTooltip>{text}</EllipsisTooltip>
                </p>
              : <p className='checkbox__label'>{text}</p>
        }
      </label>
    );
  }

  private getStateClassName = (): string => {
    const preparedState = Number(this.state.localState);

    switch (preparedState) {
      case ECheckboxState.CHECKED:
        return 'checkbox__control--checked';
      case ECheckboxState.UNCHECKED:
          return 'checkbox__control--unchecked';
      case ECheckboxState.INDETERMINATE:
          return 'checkbox__control--indeterminate';
      default:
        throw new Error('Current checkbox state is not support');
    }
  }

  private onClick = (event: React.MouseEvent<HTMLLabelElement, MouseEvent>): void => {
    const preparedState = Number(this.state.localState);

    const {
      disabled,
      onChange,
    } = this.props;

    if (!disabled) {
    // В state не может оказаться ничего кроме ECheckboxState
    // tslint:disable-next-line:switch-default
      switch (preparedState) {
        case ECheckboxState.CHECKED:
        case ECheckboxState.INDETERMINATE:
          this.setState({ localState: Boolean(ECheckboxState.UNCHECKED) });
          if (onChange) {
            onChange(Boolean(ECheckboxState.UNCHECKED), event.currentTarget.dataset);
          }
          break;
        case ECheckboxState.UNCHECKED:
          this.setState({ localState: Boolean(ECheckboxState.CHECKED) });
          if (onChange) {
            onChange(Boolean(ECheckboxState.CHECKED), event.currentTarget.dataset);
          }
        }
      }
  }
}
