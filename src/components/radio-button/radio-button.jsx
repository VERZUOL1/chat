import React from 'react';
import PropTypes from 'prop-types';
import { composeTheme } from '@css-modules-theme/core';

// Styles
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

/**
 * Renders radio button
 * @param checked
 * @param onChange
 * @param label
 * @param name
 * @param value
 * @param theme
 * @returns {*}
 * @constructor
 */
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
        className={styles.radio}
        checked={checked}
        onChange={() => onChange(value)}
        id={`${name}_${label}`}
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

RadioButton.propTypes = {
  /**
   * Checked flag
   */
  checked: PropTypes.bool,
  /**
   * On change hander
   */
  onChange: PropTypes.func.isRequired,
  /**
   * label
   */
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  /**
   * Define radios group name
   */
  name: PropTypes.string,
  /**
   * Value
   */
  value: PropTypes.number
};

export default RadioButton;