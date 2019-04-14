import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Message from '../message';

import styles from './messages.module.scss';

class Messages extends React.Component {
  messagesEndRef = React.createRef();

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  render () {
    const { messages, theme, timeFormat } = this.props;
    return (
      <ul className={styles.messagesWrapper}>
        {messages.map((item, ind) => (
          <Message key={ind} message={item} timeFormat={timeFormat} theme={theme} />
        ))}
        <div ref={this.messagesEndRef} style={{ height: '1rem' }}/>
      </ul>
    );
  }
}

Messages.propTypes = {

};

const mapStateToProps = state => {
  return {
    messages: state.chat.messages,
    theme: state.settings.theme,
    timeFormat: state.settings.timeFormat
  }
};

export default connect(mapStateToProps)(Messages);