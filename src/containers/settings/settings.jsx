import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { composeTheme } from '@css-modules-theme/core';
import { DateTime } from 'luxon';
import { FormattedMessage } from 'react-intl';

// Components
import TextInput from '../../components/text-input';
import RadioButton from '../../components/radio-button';
import Button from '../../components/button';
import DropdownSelect from '../../components/dropdown-select';

// Actions
import { updateApplicationSettings, resetAppSettings } from '../../actions/settings';

// Styles
import stylesLight from './settings.module.scss';
import stylesDark from './settings-dark.module.scss';

const themes = {
  light: {
    theme: stylesLight
  },
  dark: {
    theme: stylesDark
  }
};

/**
 * Settings page
 */
class Settings extends Component {
  /**
   * Handle username change
   * @param value
   */
  handleUsernameChange = value => {
    this.props.updateApplicationSettings('username', value);
  };

  /**
   * Handle interface color select
   * @param value
   */
  handleInterfaceColorChange = value => {
    this.props.updateApplicationSettings('theme', value ? 'light' : 'dark');
  };

  /**
   * Handle time format select
   * @param value
   */
  handleDateTimeFormat = value => {
    this.props.updateApplicationSettings('timeFormat', value ? DateTime.TIME_SIMPLE : DateTime.TIME_24_SIMPLE);
  };

  /**
   * Handle send option select
   * @param value
   */
  handleSendByKeysOptionChange = value => {
    this.props.updateApplicationSettings('sendByKeys', !!value);
  };

  /**
   * Handle reset to default press
   */
  handleResetToDefaults = () => {
    this.props.resetAppSettings();
  };

  /**
   * Handles language select
   * @param selectedOption
   */
  handleLanguageSelect = selectedOption => {
    this.props.updateApplicationSettings('selectedLocale', selectedOption);
  };

  /**
   * Render component
   * @returns {*}
   */
  render() {
    const { username, theme, timeFormat, sendByKeys, selectedLocale, locales } = this.props;

    const styles = composeTheme([themes.light, themes[theme]]);

    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.controlWrapper}>
            <div className={styles.controlLabel}>
              <FormattedMessage id="label.username" defaultMessage="User name" />
            </div>
            <TextInput
              value={username}
              onChange={this.handleUsernameChange}
              theme={theme} />
          </div>
          <div className={styles.controlWrapper}>
            <div className={styles.controlLabel}>
              <FormattedMessage id="label.interfaceColor" defaultMessage="Interface color" />
            </div>
            <div className={styles.radiosWrapper}>
              <RadioButton
                onChange={this.handleInterfaceColorChange}
                value={1}
                checked={theme === 'light'}
                label={<FormattedMessage id="label.light" defaultMessage="Light"/>}
                name='theme'
                theme={theme} />
              <RadioButton
                onChange={this.handleInterfaceColorChange}
                value={0}
                checked={theme === 'dark'}
                label={<FormattedMessage id="label.dark" defaultMessage="Dark"/>}
                name='theme' />
            </div>
          </div>
          <div className={styles.controlWrapper}>
            <div className={styles.controlLabel}>
              <FormattedMessage id="label.clockDisplay" defaultMessage="Clock display" />
            </div>
            <div className={styles.radiosWrapper}>
              <RadioButton
                onChange={this.handleDateTimeFormat}
                value={1}
                checked={timeFormat === DateTime.TIME_SIMPLE || timeFormat.hour12 === undefined}
                label={<FormattedMessage id="label.12hours" defaultMessage="12 Hours"/>}
                name='timeFormat' />
              <RadioButton
                onChange={this.handleDateTimeFormat}
                value={0}
                checked={timeFormat === DateTime.TIME_24_SIMPLE || timeFormat.hour12 === false}
                label={<FormattedMessage id="label.24hours" defaultMessage="24 Hours"/>}
                name='timeFormat' />
            </div>
          </div>
          <div className={styles.controlWrapper}>
            <div className={styles.controlLabel}>
              <FormattedMessage id="label.sendByKeys" defaultMessage="Send messages on CTRL + ENTER"/>
            </div>
            <div className={styles.radiosWrapper}>
              <RadioButton
                onChange={this.handleSendByKeysOptionChange}
                value={1}
                checked={sendByKeys}
                label={<FormattedMessage id="label.on" defaultMessage="On"/>}
                name='sendByKeys' />
              <RadioButton
                onChange={this.handleSendByKeysOptionChange}
                value={0}
                checked={!sendByKeys}
                label={<FormattedMessage id="label.off" defaultMessage="Off"/>}
                name='sendByKeys' />
            </div>
          </div>
          <div className={styles.controlWrapper}>
            <div className={styles.controlLabel}>
              <FormattedMessage id="label.selectLanguage" defaultMessage="Select language"/>
            </div>
            <DropdownSelect
              value={selectedLocale}
              onChange={this.handleLanguageSelect}
              options={locales}
            />
          </div>
        </div>
        <div className={styles.resetButtonWrapper}>
          <Button
            label={<FormattedMessage id="label.resetToDefaults" defaultMessage='Reset to defaults' />}
            theme={theme}
            onClick={this.handleResetToDefaults}/>
        </div>
      </div>
    );
  }
}

Settings.propTypes = {
  username: PropTypes.string,
  theme: PropTypes.string,
  timeFormat: PropTypes.object,
  sendByKeys: PropTypes.bool,
  selectedLocale: PropTypes.string,
  locales: PropTypes.array
};

/**
 * Map state to component props
 * @param state
 * @returns {{locales: *, timeFormat: *, sendByKeys: (*|boolean), theme: *, selectedLocale: (*|initialState.selectedLocale|{label, value}), username: (*|string|T|string)}}
 */
const mapStateToProps = state => {
  return {
    /**
     * User name
     */
    username: state.settings.username,
    /**
     * Selected theme
     */
    theme: state.settings.theme,
    /**
     * Selected time format
     */
    timeFormat: state.settings.timeFormat,
    /**
     * Options to send messages
     */
    sendByKeys: state.settings.sendByKeys,
    /**
     * Available locales
     */
    locales: state.settings.locales,
    /**
     * Selected locale
     */
    selectedLocale: state.settings.selectedLocale
  };
};

/**
 * Map actions to component props
 * @type {{updateApplicationSettings: updateApplicationSettings, resetAppSettings: resetAppSettings}}
 */
const mapDispatchToProps = {
  updateApplicationSettings,
  resetAppSettings,
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);