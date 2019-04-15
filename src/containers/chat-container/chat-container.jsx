import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { composeTheme } from '@css-modules-theme/core';

// Components
import Messages from '../../components/messages';
import MessageInput from '../../components/message-input';

// Actions
import { updateMessagesStatus } from '../../actions/chat';

// Styles
import stylesLight from './chat.module.scss';
import stylesDark from './chat-dark.module.scss';

const themes = {
  light: {
    theme: stylesLight
  },
  dark: {
    theme: stylesDark
  }
};

/**
 * Chat page
 */
class ChatContainer extends Component {
  /**
   * Updates unread messages status on load
   */
  componentDidMount() {
    this.props.updateMessagesStatus();
  }

  /**
   * Render component
   * @returns {*}
   */
  render() {
    const {
      theme
    } = this.props;
    const styles = composeTheme([themes.light, themes[theme]]);

    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Messages />
        </div>
        <div className={styles.writeMessageWrapper}>
          <MessageInput />
        </div>
      </div>
    );
  }
}

ChatContainer.propTypes = {
  /**
   * Selected theme
   */
  theme: PropTypes.string
};

/**
 * Map state to component props
 * @param state
 * @returns {{theme: *}}
 */
const mapStateToProps = state => {
  return {
    theme: state.settings.theme
  }
};

/**
 * Map actions to component props
 * @type {{updateMessagesStatus: updateMessagesStatus}}
 */
const mapDispatchToProps = {
  updateMessagesStatus
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);