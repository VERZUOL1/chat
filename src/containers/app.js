import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { composeTheme } from '@css-modules-theme/core';

import Header from './header';
import Chat from './chat-container'
import Settings from './settings';

import { connectToChat, disconnectFromChat } from '../actions/chat';

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

class App extends Component {
  componentDidMount() {
    this.props.connectToChat();
  }

  componentWillUnmount() {
    this.props.disconnectFromChat();
  }

  render() {
    const { theme } = this.props;
    const styles = composeTheme([themes.light, themes[theme]]);
    return (
      <div className={styles.container}>
        <div className='pure-u-xl-1-3 pure-u-md-1-2 pure-u-sm-1 pure-u-1'>
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

const mapStateToProps = state => {
  return {
    theme: state.settings.theme
  }
};

const mapDispatchToProps = {
  connectToChat,
  disconnectFromChat
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
