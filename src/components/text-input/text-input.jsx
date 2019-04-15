import React from 'react';
import PropTypes from 'prop-types';
import { composeTheme } from '@css-modules-theme/core';

import stylesLight from './text-input.module.scss';
import stylesDark from './text-input-dark.module.scss';

const themes = {
  light: {
    theme: stylesLight
  },
  dark: {
    theme: stylesDark
  }
};


const TextInput = ({
  value,
  onChange,
  theme,
  placeholder
}) => {
  const styles = composeTheme([themes.light, themes[theme]]);
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        type='text'
        placeholder={placeholder}
        onChange={e => onChange(e.target.value)}
        value={value} />
    </div>
  );
};

TextInput.defaultProps = {
  theme: 'light',
  placeholder: 'Default'
};

TextInput.propTypes = {

};

export default TextInput;