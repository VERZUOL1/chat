import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components
import Message from '../message';

// Styles
import styles from './messages.module.scss';

/**
 * Renders messages list
 */
class Messages extends React.Component {
  messagesEndRef = React.createRef();

  /**
   * Scroll to bottom on update
   * @param prevProps
   * @param prevState
   * @param snapshot
   */
  componentDidUpdate(prevProps, prevState, snapshot) {
    this.scrollToBottom();
  }

  /**
   * Scroll to bottom handler
   */
  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  /**
   * Renders component
   * @returns {*}
   */
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
  /**
   * Chat messages
   */
  messages: PropTypes.array,
  /**
   * Selected theme
   */
  theme: PropTypes.string,
  /**
   * Selected time format
   */
  timeFormat: PropTypes.object
};

/**
 * Map state to component props
 * @param state
 * @returns {{timeFormat: *, messages: (*|vfileMessage.VFileMessage[]|initialState.messages|{}|defaultProps.messages|Array), theme: *}}
 */
const mapStateToProps = state => {
  return {
    messages: state.chat.messages,
    theme: state.settings.theme,
    timeFormat: state.settings.timeFormat
  }
};

export default connect(mapStateToProps)(Messages);