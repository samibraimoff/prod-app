import { InputHTMLAttributes, memo, useEffect, useRef, useState } from "react";
import { cssClassNames } from "shared/helpers/class-names/css-class-names";

import styles from "./input.module.scss";

type InputHTMLProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

interface InputProps extends InputHTMLProps {
  className?: string;
  placeholder?: string;
  type?: string;
  label?: string;
  value?: string;
  autoFocus?: boolean;
  onChange: (value: string) => void;
}

const Input = memo((props: InputProps) => {
  const {
    className,
    placeholder = "",
    type = "text",
    label,
    autoFocus,
    onChange,
    ...otherProps
  } = props;
  const [_, setIsFocused] = useState<boolean>(false);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autoFocus]);

  const classes = cssClassNames(styles.input, {}, [className]);
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  return (
    <div className={classes}>
      {label && <label htmlFor={label}>{label}</label>}
      <input
        ref={ref}
        id={label}
        className={classes}
        placeholder={placeholder}
        type={type}
        onChange={onChangeHandler}
        onFocus={onFocus}
        autoFocus={autoFocus}
        autoComplete="off"
        {...otherProps}
      />
    </div>
  );
});

Input.displayName = "Input";
export { Input };
