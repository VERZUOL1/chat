import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? 'black' : 'grey',
    padding: 10,
  }),
  control: provided => ({
    ...provided,
    border: '2px solid black',
    width: 200,
  })
};

const customStylesDark = {
  menuList: provided => ({
    ...provided,
    backgroundColor: 'black',
    border: '2px solid rgb(92, 18, 0)',
    borderRadius: '0.4rem'
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? 'white' : 'grey',
    backgroundColor: 'black',
    padding: 10,
  }),
  control: provided => ({
    ...provided,
    color: 'white',
    border: '2px solid rgb(92, 18, 0)',
    boxShadow: '2px 2px 6px rgb(92, 18, 0)',
    backgroundColor: 'rgba(black, 0.7)',
    width: 200,
  })
};

const themes = {
  light: customStyles,
  dark: customStylesDark
};

/**
 * Renders customized dropdown select
 * @param value
 * @param onChange
 * @param options
 * @returns {*}
 * @constructor
 */
const DropdownSelect = ({ value, onChange, options, theme}) => {
  return (
    <Select
      styles={{ ...themes[theme]}}
      value={value}
      onChange={onChange}
      options={options}
      theme={(th) => ({
        ...th,
        borderRadius: '0.4rem',
        colors: {
          ...th.colors,
          primary25: '#5C1200',
          primary: '#ededed'
        },
      })}
    />
  );
};

DropdownSelect.propTypes = {
  /**
   * Selected dropdown value
   */
  value: PropTypes.object,
  /**
   * On options change handler
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Available options
   */
  options: PropTypes.array.isRequired
};

export default DropdownSelect;
