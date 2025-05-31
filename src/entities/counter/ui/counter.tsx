import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib';
import { Button } from 'shared/ui';

import { getCounterValue } from '../model/selectors/get-counter-value/get-counter-value';
import { counterActions } from '../model/slice/counter-slice';
import classes from './counter.module.scss';

interface CounterProps {
    className?: string;
}

export const Counter = (props: CounterProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const value = useSelector(getCounterValue);

  const onIncrement = () => {
    dispatch(counterActions.increment());
  };
  const onDecrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div className={classNames(classes.counter, {}, [className])}>
      <h1 data-testid="value-title">{value}</h1>
      <Button data-testid="increament-btn" onClick={onIncrement}>{t('pages.main.increamentBtn')}</Button>
      <Button data-testid="decreament-btn" onClick={onDecrement}>{t('pages.main.decreamentBtn')}</Button>
    </div>
  );
};
