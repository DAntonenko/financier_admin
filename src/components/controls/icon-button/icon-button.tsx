import * as React from 'react';
import { mergeClassNames } from '../../../utils/merge-class-names';

import './icon-button.css';

export enum EIconButtonIcon {
  ADD = 'icon-navigation-add-16',
  FOLDER = 'icon-folder-16_icon-04',
  EDIT = 'icon-formatting-edit-16_icon-04',
  CLOSE = 'icon-navigation-close-16_icon-01',
  REMOVE = 'icon-formatting-delete-16_icon-04',
  COLORPICKER = 'icon-pipette-16_icon-04',
  DRAG = '',
  EXPAND = 'icon-navigation-expand-16',
  COLLAPSE = 'icon-navigation-collapse-16',
}

export enum EIconButtonSize {
  SMALL,
  MEDIUM,
  LARGE,
}
const getIconClassName = (icon?: EIconButtonIcon): string => {
  let currentClassName: string;
  const baseClassName = 'icon-button--icon';
  switch (icon) {
    case EIconButtonIcon.ADD:
      currentClassName = 'icon-button--icon-add';
      break;
    case EIconButtonIcon.FOLDER:
      currentClassName = 'icon-button--icon-folder';
      break;
    case EIconButtonIcon.EDIT:
      currentClassName = 'icon-button--icon-edit';
      break;
    case EIconButtonIcon.CLOSE:
      currentClassName = 'icon-button--icon-close';
      break;
    case EIconButtonIcon.REMOVE:
      currentClassName = 'icon-button--icon-remove';
      break;
    case EIconButtonIcon.COLORPICKER:
      currentClassName = 'icon-button--icon-colorpicker';
      break;
    case EIconButtonIcon.DRAG:
      currentClassName = 'icon-button--icon-drag';
      break;
    case EIconButtonIcon.EXPAND:
      currentClassName = 'icon-button--icon-expand';
      break;
    case EIconButtonIcon.COLLAPSE:
      currentClassName = 'icon-button--icon-collapse';
      break;
    default:
      currentClassName = '';
  }

  return mergeClassNames([baseClassName, currentClassName]);
};

const getSizeClassName = (size?: EIconButtonSize): string => {
  switch (size) {
    case EIconButtonSize.SMALL:
      return 'icon-button--small';
    case EIconButtonSize.MEDIUM:
      return 'icon-button--medium';
    case EIconButtonSize.LARGE:
        return 'icon-button--large';
    default:
      return 'icon-button--large';
  }
};

interface IIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: EIconButtonIcon;
  size: EIconButtonSize;
  borderless?: boolean;
}

export const IconButton = (props: IIconButtonProps)  => (
  <button
    {...props}
    className={ mergeClassNames([
      'icon-button',
      props.borderless && 'icon-button--borderless',
      getIconClassName(props.icon),
      getSizeClassName(props.size),
      props.className,
    ]) }
  />
);
