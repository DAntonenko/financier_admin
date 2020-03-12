import * as React from 'react';
import { mergeClassNames } from '../../../utils/merge-class-names';

import './button.css';

export enum EButtonAppearance {
  PRIMARY,
  SECONDARY,
  SUCCESS,
  LIGHT,
  GHOST,
}

export enum EButtonSize {
  SMALL,
  MEDIUM,
  LARGE,
}

export enum EButtonIcon {
  ADD = 'icon-navigation-add-16',
  UPLOAD = 'icon-file-upload-16_icon-01',
}

const getAppearanceClassName = (appearance?: EButtonAppearance): string => {
  switch (appearance) {
    case EButtonAppearance.PRIMARY:
      return 'button--primary';
    case EButtonAppearance.SECONDARY:
      return 'button--secondary';
    case EButtonAppearance.SUCCESS:
      return 'button--success';
    case EButtonAppearance.LIGHT:
      return 'button--light';
    case EButtonAppearance.GHOST:
      return 'button--ghost';
    default:
      return 'button--primary';
  }
};

const getSizeClassName = (size?: EButtonSize): string => {
  switch (size) {
    case EButtonSize.SMALL:
      return 'button--small';
    case EButtonSize.MEDIUM:
      return 'button--medium';
    case EButtonSize.LARGE:
        return 'button--large';
    default:
      return 'button--large';
  }
};

const getIconClassName = (icon?: EButtonIcon): string => {
  let currentClassName: string;
  const baseClassName = icon !== undefined ? 'button--icon' : '';

  switch (icon) {
    case EButtonIcon.ADD:
      currentClassName = 'button--icon-add';
      break;
    case EButtonIcon.UPLOAD:
      currentClassName = 'button--icon-upload';
      break;
    default:
      currentClassName = '';
  }

  return mergeClassNames([baseClassName, currentClassName]);
};

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  appearance?: EButtonAppearance;
  size?: EButtonSize;
  text: string;
  icon?: EButtonIcon;
  wide?: boolean;
}

export const Button = (props: IButtonProps)  => (
  <button
    {...props}
    className={ mergeClassNames([
      'button',
      getAppearanceClassName(props.appearance),
      getSizeClassName(props.size),
      getIconClassName(props.icon),
      props.className,
      props.wide ? 'button--wide' : '',
    ]) }
  >
    {props.text}
  </button>
);
