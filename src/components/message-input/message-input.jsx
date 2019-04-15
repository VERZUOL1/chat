import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import TextInput from '../text-input';
import Button from '../button';
import { sendMessage } from '../../actions/chat';

/**
 * Message input with submit button
 */
class MessageInput extends Component {
  state = {
    value: ''
  };

  /**
   * Add listener to handle submit by enter key
   */
  componentDidMount() {
    document.addEventListener('keypress', this.handleSubmitByKeys)
  }

  /**
   * Remove listener on unmount
   */
  componentWillUnmount() {
    document.removeEventListener('keypress', this.handleSubmitByKeys);
  }

  /**
   * Submit message by enter or ctrl+enter depending on app settings
   * @param event
   */
  handleSubmitByKeys = event => {
    if ((this.props.sendByKeys && event.ctrlKey && event.key === 'Enter')
      || (!this.props.sendByKeys && event.key === 'Enter')) {
      this.handleSubmit();
    }
  };

  /**
   * Handle input change
   * @param value
   */
  handleChange = value => {
    this.setState({
      value
    })
  };

  /**
   * Handle submit action
   */
  handleSubmit = () => {
    if (this.state.value.trim() === '') {
      this.setState({
        value: ''
      });
      return;
    }

    this.props.sendMessage(this.state.value);
    this.setState({
      value: ''
    });
  };

  /**
   * Render compinent
   * @returns {*}
   */
  render() {
    const { value } = this.state;
    const { theme } = this.props;
    return (
      <>
        <TextInput
          placeholder='Enter a message'
          onChange={this.handleChange}
          value={value}
          theme={theme} />
        <Button
          onClick={this.handleSubmit}
          label={<FormattedMessage id="button.send" defaultMessage="Send" />}
          style={{ width: '80px', marginLeft: '20px' }}
          theme={theme} />
      </>
    );
  }
}

MessageInput.propTypes = {
  /**
   * Selected theme
   */
  theme: PropTypes.string,
  /**
   * Define how to handle enter key action
   */
  sendByKeys: PropTypes.bool
};

/**
 * Map state to component props
 * @param state
 * @returns {{sendByKeys: (*|boolean), theme: *}}
 */
const mapStateToProps = state => {
  return {
    theme: state.settings.theme,
    sendByKeys: state.settings.sendByKeys
  }
};

/**
 * Map actions to component props
 * @type {{sendMessage: sendMessage}}
 */
const mapDispatchToProps = {
  sendMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageInput);