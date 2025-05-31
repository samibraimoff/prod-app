import { classNames } from 'shared/lib';
import { Loader } from 'shared/ui';

import classes from './page-loader.module.scss';

export const PageLoader = () => (
  <div className={classNames(classes['page-loader'], {}, [])}>
    <Loader />
  </div>
);
