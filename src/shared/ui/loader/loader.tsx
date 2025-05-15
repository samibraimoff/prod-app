import './loader.scss';
import { classNames } from 'shared/lib/class-names/class-names';

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
