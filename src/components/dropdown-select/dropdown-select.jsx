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
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
};

/**
 * Renders customized dropdown select
 * @param value
 * @param onChange
 * @param options
 * @returns {*}
 * @constructor
 */
const DropdownSelect = ({ value, onChange, options}) => {
  return (
    <Select
      styles={customStyles}
      value={value}
      onChange={onChange}
      options={options}
      theme={(theme) => ({
        ...theme,
        borderRadius: '0.4rem',
        colors: {
          ...theme.colors
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
