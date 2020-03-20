import * as React from 'react';
import { mergeClassNames } from '../../utils/merge-class-names';
import './modal.css';

interface IModalProps {
  id?: string;
  headerId?: string;
  isHiddenCloseButton?: boolean;
  headerText?: string;
  subtitleText?: string;
  className?: string;
  onClose?: () => void;
}

export const Modal: React.FunctionComponent<IModalProps> = (props) => {
  const {
    id,
    isHiddenCloseButton,
    onClose,
    headerText,
    className,
    children,
    subtitleText,
  } = props;

  return (
    <div className='modal__overlay'>
      <div
        id={id}
        className={
          mergeClassNames([
            'modal',
            className ? className : '',
          ])
        }
      >
        {!isHiddenCloseButton &&
          <div
            className='modal__close'
            onClick={onClose}
            id='seleniumModalCloseButtonId'
          />
        }
        <div className='modal__header-container' id={props.headerId}>
          {headerText && <div className={mergeClassNames (['modal__header'],)}>{headerText}</div>}
          {subtitleText && <div className={'modal__subtitle'}>{subtitleText}</div>}
        </div>
        <div className={'modal__content'}>{children}</div>
      </div>
    </div>
  );
};
