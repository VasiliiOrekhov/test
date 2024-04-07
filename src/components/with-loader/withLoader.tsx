import { FC, PropsWithChildren, ReactElement } from 'react';

import UniversalLoader from 'components/universal-loader';

import s from './WithLoader.module.scss';

export type WithLoaderProps = PropsWithChildren<{
  isLoading?: boolean;
  loader?: ReactElement;
}>;

const WithLoader: FC<WithLoaderProps> = (props): ReactElement => {
  const {
    children,
    isLoading,
    loader = (
      <div className={s.loaderWrapper}>
        <UniversalLoader />
      </div>
    ),
  } = props;

  if (isLoading && loader) {
    return loader;
  }

  return <>{children}</>;
};

export default WithLoader;
