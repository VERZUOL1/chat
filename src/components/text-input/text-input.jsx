import React from 'react';
import PropTypes from 'prop-types';
import { composeTheme } from '@css-modules-theme/core';
import EmojiSelector from '../emoji-selector';

// Styles
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

/**
 * Renders text input component
 * @param value
 * @param onChange
 * @param theme
 * @param placeholder
 * @param showEmojiSelector
 * @returns {*}
 * @constructor
 */
const TextInput = ({
  value,
  onChange,
  theme,
  placeholder,
  showEmojiSelector
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
      {showEmojiSelector && <EmojiSelector onSelect={icon => onChange(`${value}${icon}`)}/>}
    </div>
  );
};

TextInput.defaultProps = {
  theme: 'light',
  placeholder: 'Default',
  showEmojiSelector: false
};

TextInput.propTypes = {
  /**
   * Value
   */
  value: PropTypes.string,
  /**
   * On change handler
   */
  onChange: PropTypes.func.isRequired,
  /*
   * Selected theme
   */
  theme: PropTypes.string,
  /**
   * Optional placeholder
   */
  placeholder: PropTypes.string,
  showEmojiSelector: PropTypes.bool
};

export default TextInput;