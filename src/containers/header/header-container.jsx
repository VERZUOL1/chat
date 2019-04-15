import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { composeTheme } from '@css-modules-theme/core';
import { FormattedMessage } from 'react-intl';
import getUnreadMessagesCount from '../../helpers/selectors';

import stylesLight from './header.module.scss';
import stylesDark from './header-dark.module.scss';

const themes = {
  light: {
    theme: stylesLight
  },
  dark: {
    theme: stylesDark
  }
};

class HeaderContainer extends Component {
  render() {
    const { messagesCount, theme } = this.props;
    const showAttention = messagesCount > 0;

    const styles = composeTheme([themes.light, themes[theme]]);

    return (
      <div className={styles.headerContainer}>
        <ul className={styles.tabsWrapper}>
          <li className={classNames(styles.tabControl, {
            [styles.attention]: showAttention
          })}>
            <NavLink exact to='/'>
              <FormattedMessage id="tab.chat" defaultMessage="Chat" />
              {showAttention && <span className={styles.sup}>{messagesCount}</span>}
            </NavLink>
          </li>
          <li className={styles.tabControl}>
            <NavLink to='/settings'>
              <FormattedMessage id="tab.settings" defaultMessage="Settings" />
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

HeaderContainer.propTypes = {};

const mapStateToProps = state => {
  return {
    messagesCount: getUnreadMessagesCount(state),
    theme: state.settings.theme
  }
};

export default connect(mapStateToProps)(HeaderContainer);
