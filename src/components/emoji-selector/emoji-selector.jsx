import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Picker } from 'emoji-mart';

import 'emoji-mart/css/emoji-mart.css';
import './custom-emoji.scss';
import styles from './emoji-selector.module.scss';

class EmojiSelector extends React.Component {
  state = {
    isOpen: false
  };

  handleToggleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

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

  render() {
    const { isOpen } = this.state;

    return (
      <div className={styles.toggle} onClick={this.handleToggleClick}>
        <i className='far fa-smile-wink' />
        {isOpen && <div className={styles.picker}>
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

};

export default EmojiSelector;