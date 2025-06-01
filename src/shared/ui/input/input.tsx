import {
  ChangeEvent, InputHTMLAttributes, memo, useEffect,
  useRef,
  useState,
} from 'react';
import { classNames } from 'shared/lib';

import classes from './input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    placeholder: string;
    autofocus?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className, value, onChange, type = 'text', placeholder, autofocus, ...otherProps
  } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const mods = {};
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      inputRef.current?.focus();
    }
  }, [autofocus]);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onSelect = (e: any) => {
    setCaretPosition(e?.target.selectionStart || 0);
  };

  return (
    <div className={classNames(classes.inputContainer, mods, [className])}>
      {placeholder && (
        <div className={classes.placeholder}>
          {`${placeholder}>`}
        </div>
      )}
      <div className={classes.caretWrapper}>
        <input
          ref={inputRef}
          className={classNames(classes.input, {}, [])}
          type={type}
          value={value}
          onChange={onChangeHandler}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          {...otherProps}
        />
        {isFocused && <span className={classes.caret} style={{ left: `${caretPosition * 7.5}px` }} />}
      </div>

    </div>
  );
});
