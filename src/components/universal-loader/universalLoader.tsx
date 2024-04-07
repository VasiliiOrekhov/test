import { FC } from 'react';

import cn from 'classnames';

import s from './UniversalLoader.module.scss';

interface UniversalLoaderProps {
  className?: string;
}

const UniversalLoader: FC<UniversalLoaderProps> = (props) => {
  const { className } = props;

  return <div className={cn(s.loader, className)} />;
};

export default UniversalLoader;
