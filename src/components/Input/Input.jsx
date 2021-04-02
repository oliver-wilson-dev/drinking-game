/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import cn from 'classnames';
import styles from './Input.module.css';

const Input = ({
  value,
  onChange,
  className,
  placeholder,
  type = 'text',
  maxLength = 20,
  disabled = false,
  ...rest
}) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    disabled={disabled}
    maxLength={maxLength}
    placeholder={placeholder}
    className={cn(className, styles.input)}
    {...rest}
  />
);

export default Input;
