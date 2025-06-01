import { classNames } from 'shared/lib';

interface UserProps {
    className?: string;
}

export const User = (props: UserProps) => {
  const { className } = props;
  return (
    <div className={classNames('', {}, [className])}>
      {/* <LoginModal /> */}
    </div>
  );
};
