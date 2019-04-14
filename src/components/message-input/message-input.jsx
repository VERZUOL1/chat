import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextInput from '../text-input';
import Button from '../button';
import { sendMessage } from '../../actions/chat';

class MessageInput extends Component {
  state = {
    value: ''
  };

  componentDidMount() {
    document.addEventListener('keypress', this.handleSubmitByKeys)
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.handleSubmitByKeys);
  }

  handleSubmitByKeys = event => {
    if ((this.props.sendByKeys && event.ctrlKey && event.key === 'Enter')
      || (!this.props.sendByKeys && event.key === 'Enter')) {
      this.handleSubmit();
    }
  };

  handleChange = value => {
    this.setState({
      value
    })
  };

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

  render() {
    const { value } = this.state;
    const { theme } = this.props;
    return (
      <>
        <TextInput onChange={this.handleChange} value={value} theme={theme} />
        <Button onClick={this.handleSubmit} label='SEND' style={{ width: '80px', marginLeft: '20px' }} theme={theme} />
      </>
    );
  }
}

MessageInput.propTypes = {
};

const mapStateToProps = state => {
  return {
    theme: state.settings.theme,
    sendByKeys: state.settings.sendByKeys
  }
};

const mapDispatchToProps = {
  sendMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageInput);