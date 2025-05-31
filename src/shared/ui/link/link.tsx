import { FC, ReactNode } from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib';

import classes from './link.module.scss';

export enum LinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}
interface Props extends LinkProps {
  children: ReactNode;
  className?: string;
  theme?: LinkTheme;
}

export const Link: FC<Props> = (props: Props) => {
  const {
    children, className, theme, to, ...rest
  } = props;

  return (
    <RouterLink
      to={to}
      {...rest}
      className={classNames(classes.link, {}, [className, classes[theme]])}
    >
      {children}
    </RouterLink>
  );
};
