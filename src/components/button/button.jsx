import React from 'react';
import PropTypes from 'prop-types';
import { composeTheme } from '@css-modules-theme/core';

// Styles
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

/**
 * Button component
 * @param theme
 * @param label
 * @param onClick
 * @param style
 * @returns {*}
 * @constructor
 */
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
  /**
   * Optional styles
   */
  style: PropTypes.object,
  /**
   * Selected theme
   */
  theme: PropTypes.string,
  /**
   * On button click handler
   */
  onClick: PropTypes.func.isRequired,
  /**
   * Button label
   */
  label: PropTypes.node
};

export default Button;