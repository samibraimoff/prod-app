import { classNames } from 'shared/lib';

import classes from './user.module.scss';

interface UserProps {
    className?: string;
}

export const User = (props: UserProps) => {
  const { className } = props;
  return (
    <div className={classNames(classes.user, {}, [className])}>
      {/* <LoginModal /> */}
    </div>
  );
};
