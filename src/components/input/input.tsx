import { forwardRef } from 'react';

import { Input as InputAntd, InputProps as InputPropsAntd, InputRef } from 'antd';
import cn from 'classnames';
import s from './Input.module.scss';

export interface InputProps extends InputPropsAntd {}

const Input = forwardRef<InputRef, InputProps>((props, ref) => {
  const { className, size = 'middle', ...otherProps } = props;

  return (
    <InputAntd
      ref={ref}
      className={cn(s.wrapper, s[size], className)}
      size={size}
      {...otherProps}
    />
  );
});

export default Input;
