/* eslint-disable react/button-has-type */
import React from 'react';
import cn from 'classnames';
import styles from './Button.module.css';

const Button = ({
  onClick,
  disabled,
  children,
  className,
  type = 'button',
}) => (
  <button
    className={cn(styles.button, className)}
    type={type}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>

);

export default Button;
