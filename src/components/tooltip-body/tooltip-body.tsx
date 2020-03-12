import * as React from 'react';

import { createRef, RefObject } from 'react';
import { mergeClassNames } from '../../utils/merge-class-names';
import './tooltip-body.css';

export enum EVerticalTooltipBodyPosition {
  TOP,
  BOTTOM,
}

export enum EHorizontalTooltipBodyPosition {
  LEFT,
  RIGHT,
  CENTER,
}

export interface ITooltipBodyProps {
  optionalText?: string;
  isCopyAvailable?: boolean;
  verticalPosition?: EVerticalTooltipBodyPosition;
  horizontalPosition?: EHorizontalTooltipBodyPosition;
  className?: string;
  style?: React.CSSProperties;
}

const getVerticalPositionClassName = (position: EVerticalTooltipBodyPosition) => {
  switch (position) {
    case EVerticalTooltipBodyPosition.TOP:
      return 'tooltip-body--top';
    case EVerticalTooltipBodyPosition.BOTTOM:
      return 'tooltip-body--bottom';
    default:
        return 'tooltip-body--bottom';
  }
};

const getlHorizontalPositionClassName = (position: EHorizontalTooltipBodyPosition) => {
  switch (position) {
    case EHorizontalTooltipBodyPosition.LEFT:
      return 'tooltip-body--left';
    case EHorizontalTooltipBodyPosition.RIGHT:
      return 'tooltip-body--right';
    case EHorizontalTooltipBodyPosition.CENTER:
      return 'tooltip-body--center';
    default:
      return 'tooltip-body--left';
  }
};

export const TooltipBody: React.FunctionComponent<ITooltipBodyProps> = (props) => {

  const [isCopied, setCopied] = React.useState(false);

  const textRef: RefObject<HTMLDivElement> = createRef<HTMLDivElement>();

  const copyContent = () => {
    const copyiedContent = textRef.current.innerText;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(copyiedContent);
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = copyiedContent;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
  };

  const onCopy = () => {
    copyContent();
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div
      className={
        mergeClassNames([
          'tooltip-body',
          getVerticalPositionClassName(props.verticalPosition),
          getlHorizontalPositionClassName(props.horizontalPosition),
          props.className ? props.className : '',
        ])
      }
    >
      <div
        className={
          mergeClassNames([
            'tooltip-body__body',
            props.isCopyAvailable ? 'tooltip-body__body--copy' : '',
          ])
        }
        style={props.style ? props.style : {}}
      >
        <div className='tooltip-body__text-container'>
          <div ref={textRef} className='tooltip-body__text'>{props.children}</div>
          {
            props.optionalText &&
            <div className='tooltip-body__optional-text'>{props.optionalText}</div>}
        </div>
        {
          props.isCopyAvailable &&
          <>
            <div
              className='tooltip-body__copy-icon'
              onClick={onCopy}
            />
            <TooltipBody
              className={
                mergeClassNames([
                  'tooltip-body__copy-tooltip',
                  isCopied ? 'tooltip-body__copy-tooltip--visible' : '',
                ])
              }
              verticalPosition={EVerticalTooltipBodyPosition.TOP}
              horizontalPosition={EHorizontalTooltipBodyPosition.CENTER}
            >
              {isCopied ? 'Скопировано' : 'Копировать'}
            </TooltipBody>
          </>
        }
      </div>
    </div>
  );
};
