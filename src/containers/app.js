import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { composeTheme } from '@css-modules-theme/core';

// Components
import Header from './header';
import Chat from './chat-container'
import Settings from './settings';

// Actions
import { connectToChat, disconnectFromChat } from '../actions/chat';

// Styles
import stylesLight from './app.module.scss';
import stylesDark from './app-dark.module.scss';

const themes = {
  light: {
    theme: stylesLight
  },
  dark: {
    theme: stylesDark
  }
};

/**
 * Main app component
 */
class App extends Component {
  /**
   * Dispatch connect to chat on app load
   */
  componentDidMount() {
    this.props.connectToChat();
  }

  /**
   * Disconnect from chat on close
   */
  componentWillUnmount() {
    this.props.disconnectFromChat();
  }

  /**
   * Render component
   * @returns {*}
   */
  render() {
    const { theme } = this.props;
    const styles = composeTheme([themes.light, themes[theme]]);
    return (
      <div className={styles.container}>
        <div className='pure-u-xl-1-3 pure-u-md-1-2 pure-u-sm-1 pure-u-1'>
          <div className={styles.title}>Chat with me!</div>
          <Header />
          <Switch>
            <Route exact path='/' component={Chat} />
            <Route path='/settings' component={Settings} />
          </Switch>
        </div>
      </div>
    );
  }
}

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
 * @type {{connectToChat: connectToChat, disconnectFromChat: disconnectFromChat}}
 */
const mapDispatchToProps = {
  connectToChat,
  disconnectFromChat
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
