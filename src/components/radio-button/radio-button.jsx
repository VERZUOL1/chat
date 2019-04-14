import React from 'react';
import { composeTheme } from '@css-modules-theme/core';

import stylesLight from './radio-button.module.scss';
import stylesDark from './radio-button-dark.module.scss';

const themes = {
  light: {
    theme: stylesLight
  },
  dark: {
    theme: stylesDark
  }
};

const RadioButton = ({
  checked,
  onChange,
  label,
  name,
  value,
  theme
}) => {
  const styles = composeTheme([themes.light, themes[theme]]);
  return (
    <div className={styles.wrapper}>
      <input
        checked={checked}
        onChange={() => onChange(value)}
        id={label}
        name={name}
        type='radio'
        value={value} />
      <label
        htmlFor={label}
        onClick={() => onChange(value)}>
        {label}
      </label>
    </div>
  );
};

RadioButton.defaultProps = {
  theme: 'light'
};

export default RadioButton;