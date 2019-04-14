import React from 'react';
import PropTypes from 'prop-types';
import { composeTheme } from '@css-modules-theme/core';

import stylesLight from './button.module.scss';
import stylesDark from './button-dark.module.scss';

const themes = {
  light: {
    theme: stylesLight
  },
  dark: {
    theme: stylesDark
  }
};

const Button = ({
  theme,
  label,
  onClick,
  style
}) => {
  const styles = composeTheme([themes.light, themes[theme]]);
  return (
    <div className={styles.wrapper} style={style}>
      <button onClick={onClick} className={styles.button}>
        {label}
      </button>
    </div>
  );
};

Button.defaultProps = {
  theme: 'light'
};

Button.propTypes = {
  style: PropTypes.object,
  theme: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.node
};

export default Button;