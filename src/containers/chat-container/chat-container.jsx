import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { composeTheme } from '@css-modules-theme/core';

import Messages from '../../components/messages';
import MessageInput from '../../components/message-input';

import { updateMessagesStatus } from '../../actions/chat';

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


class ChatContainer extends Component {
  componentDidMount() {
    this.props.updateMessagesStatus();
  }

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

ChatContainer.propTypes = {};

const mapStateToProps = state => {
  return {
    theme: state.settings.theme
  }
};

const mapDispatchToProps = {
  updateMessagesStatus
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);