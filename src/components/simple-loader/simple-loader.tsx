import * as React from 'react';
import './simple-loader.css';
import { mergeClassNames } from '../../utils/merge-class-names/merge-class-names';

interface ISimpleLoaderProps {
  caption?: string;
  className?: string;
}

export const SimpleLoader = (props: ISimpleLoaderProps) => {
  return (
    <div
      className={
        mergeClassNames([
          'simple-loader',
          props.className ? props.className : '',
        ])
      }
    >
      <span className='simple-loader__point' />
      <span className='simple-loader__point' />
      <span className='simple-loader__point' />
      <span className='simple-loader__point' />
      {props.caption &&
        <div className='simple-loader__caption'>{props.caption}</div>
      }
    </div>
  );
};
