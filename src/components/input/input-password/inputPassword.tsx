import React, { FC, forwardRef } from 'react';
import { Input, InputRef } from 'antd';

import { InputProps as InputPropsAntd } from 'antd/lib/input';
import cn from 'classnames';
import s from '../Input.module.scss';

const { Password: PasswordAntd } = Input;

export interface PasswordProps extends InputPropsAntd {}

const Password: FC<PasswordProps> = forwardRef<InputRef, PasswordProps>((props, ref) => {
  const { className, size = 'middle', ...otherProps } = props;

  return <PasswordAntd ref={ref} className={cn(s.wrapper, s[size], className)} {...otherProps} />;
});

export default Password;
