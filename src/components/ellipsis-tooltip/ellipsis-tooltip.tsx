import * as React from 'react';

import { mergeClassNames } from '../../utils/merge-class-names';
import {
  EHorizontalTooltipBodyPosition,
  EVerticalTooltipBodyPosition,
  TooltipBody,
} from '../tooltip-body/tooltip-body';
import './ellipsis-tooltip.css';

interface IEllipsisTooltipProps {
  verticalPosition?: EVerticalTooltipBodyPosition;
  horizontalPosition?: EHorizontalTooltipBodyPosition;
  isCopyAvailable?: boolean;
}

interface IEllipsisTooltipState {
  isTooltipVisible: boolean;
}

export class EllipsisTooltip extends React.Component<IEllipsisTooltipProps, IEllipsisTooltipState> {
  public state: IEllipsisTooltipState = {
    isTooltipVisible: false,
  };

  public render() {
    const {
      isTooltipVisible,
    } = this.state;

    const {
      verticalPosition,
      horizontalPosition,
      isCopyAvailable,
      children,
    } = this.props;

    return (
      <p className='ellipsis-container'>
        <span
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          className='ellipsis-tooltip'
        >
          {children}
          {
            isTooltipVisible &&
            <TooltipBody
              verticalPosition={verticalPosition}
              horizontalPosition={horizontalPosition}
              className={mergeClassNames([
                'ellipsis-tooltip__popup',
                this.getVerticalPositionClassName(verticalPosition),
                this.getlHorizontalPositionClassName(horizontalPosition),
              ])}
              isCopyAvailable={isCopyAvailable}
            >
              {children}
            </TooltipBody>
          }
        </span>
      </p>
    );
  }

  private getVerticalPositionClassName = (position: EVerticalTooltipBodyPosition) => {
    switch (position) {
      case EVerticalTooltipBodyPosition.TOP:
        return 'ellipsis-tooltip__popup--top';
      case EVerticalTooltipBodyPosition.BOTTOM:
        return 'ellipsis-tooltip__popup--bottom';
      default:
          return 'ellipsis-tooltip__popup--bottom';
    }
  }

  private getlHorizontalPositionClassName = (position: EHorizontalTooltipBodyPosition) => {
    switch (position) {
      case EHorizontalTooltipBodyPosition.LEFT:
        return 'ellipsis-tooltip__popup--left';
      case EHorizontalTooltipBodyPosition.RIGHT:
        return 'ellipsis-tooltip__popup--right';
      default:
        return 'ellipsis-tooltip__popup--left';
    }
  }

  private onMouseEnter = (event) => {
    const {
      currentTarget,
    } = event;

    if (currentTarget.offsetWidth < currentTarget.scrollWidth) {
      this.setState({
        isTooltipVisible: true,
      });
    }
  }

  private onMouseLeave = () => {
    this.setState({
      isTooltipVisible: false,
    });
  }
}
