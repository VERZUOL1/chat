import React from 'react';
import PropTypes from 'prop-types';
import { Picker } from 'emoji-mart';

import 'emoji-mart/css/emoji-mart.css';
import './custom-emoji.scss';
import styles from './emoji-selector.module.scss';

/**
 * Emoji selector
 */
class EmojiSelector extends React.Component {
  state = {
    isOpen: false
  };

  /**
   * Handles open/close state
   */
  handleToggleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  /**
   * Handles icon select
   * @param e
   */
  handleSelect = e => {
    if (e.unified.length <= 5){
      const emojiPic = String.fromCodePoint(`0x${e.unified}`);
      this.props.onSelect(emojiPic);
    } else {
      let sym = e.unified.split('-');
      let codesArray = [];
      sym.forEach(el => codesArray.push('0x' + el));
      const emojiPic = String.fromCodePoint(...codesArray);
      this.props.onSelect(emojiPic);
    }
  };

  /**
   * Render component
   * @returns {*}
   */
  render() {
    const { isOpen } = this.state;

    return (
      <div className={styles.toggle} onClick={this.handleToggleClick}>
        <i className='far fa-smile-wink' />
        {isOpen && <div id='em-picker' className={styles.picker}>
          <Picker
            onSelect={this.handleSelect}
            perLine={6}
            style={{ width: '200px' }}
            sheetSize={32} />
        </div>}
      </div>

    );
  }
}

EmojiSelector.propTypes = {
  /**
   * Callback to be called on icon select
   */
  onSelect: PropTypes.func.isRequired
};

export default EmojiSelector;