import './loader.scss';

import { classNames } from 'shared/lib';

interface LoaderProps {
    className?: string;
}

export const Loader = (props: LoaderProps) => {
  const { className } = props;
  return (
    <div className={classNames('lds-default', {}, [className])}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};
