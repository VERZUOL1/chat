import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { composeTheme } from '@css-modules-theme/core';
import { FormattedMessage } from 'react-intl';

// Helpers
import getUnreadMessagesCount from '../../helpers/selectors';

// Styles
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

/**
 * Header component
 */
class HeaderContainer extends Component {
  render() {
    const { messagesCount, theme, pathname } = this.props;
    const showAttention = messagesCount > 0 && pathname !== '/';

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
        <div>{this.props.connected ? 'Yes' : 'No'}</div>
      </div>
    );
  }
}

HeaderContainer.propTypes = {
  /**
   * Number of unread messages
   */
  messagesCount: PropTypes.number,
  /**
   * Selected theme
   */
  theme: PropTypes.string
};

/**
 * Map state to component props
 * @param state
 * @returns {{theme: *, messagesCount}}
 */
const mapStateToProps = state => {
  return {
    messagesCount: getUnreadMessagesCount(state),
    theme: state.settings.theme,
    pathname: state.router.location.pathname,
    connected: state.chat.connected
  }
};

export default connect(mapStateToProps)(HeaderContainer);
