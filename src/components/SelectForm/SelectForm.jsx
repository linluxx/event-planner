import { useEffect, useState, useRef } from 'react';

import Select from 'react-select';

const SelectForm = ({ optionsName, onHandle, selectedOp }) => {
  const [selectOpen, setSelectOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(selectedOp);
  const firstRender = useRef(true);
  const categoryOptions = [
    { value: 'Art', label: 'Art' },
    { value: 'Music', label: 'Music' },
    { value: 'Business', label: 'Business' },
    { value: 'Conference', label: 'Conference' },
    { value: 'Workshop', label: 'Workshop' },
    { value: 'Party', label: 'Party' },
    { value: 'Sport', label: 'Sport' },
  ];
  const priorityOptions = [
    { value: 'High', label: 'High' },
    { value: 'Medium', label: 'Medium' },
    { value: 'Low', label: 'Low' },
  ];
  useEffect(() => {
    setSelectedOption(selectedOp);
    firstRender.current = false;
  }, [selectedOp]);
  const selectHandler = option => {
    setSelectedOption(option);
    console.log(option);
    onHandle(option.value);
  };

  return (
    <Select
      value={selectedOption}
      onChange={selectHandler}
      menuIsOpen={selectOpen}
      onMenuOpen={() => setSelectOpen(true)}
      onMenuClose={() => setSelectOpen(false)}
      options={optionsName === 'category' ? categoryOptions : priorityOptions}
      styles={{
        container: (provided, state) => ({
          ...provided,
          outline: 'none',
        }),
        option: (provided, state) => ({
          ...provided,
          fontSize: 16,
          color: state.isSelected ? 'white' : '#3F3F3F',
          backgroundColor: state.isSelected ? '#7B61FF' : 'white',
        }),
        control: (provided, state) => ({
          ...provided,
          width: '100%',
          height: '56px',
          display: 'flex',
          alignContent: 'center',
          padding: '16px 12px',
          fontSize: 16,

          borderRadius: '8px',
          transition: 'color 250ms ease-in-out, border-color 250ms ease-in-out',
          boxShadow: 'none',
          border: state.isFocused ? '1px solid #6243FF' : '1px solid #ACA7C3',

          '&:hover, &:focus ': {
            borderColor: '#6243FF',
          },
        }),
        dropdownIndicator: (provided, state) => ({
          ...provided,
          position: 'absolute',
          top: '-22px',

          color: state.isFocused ? '#6243FF' : '#ACA7C3',
          '&:hover, &:focus ': {
            color: '#6243FF',
          },
        }),
        indicatorsContainer: provided => ({
          ...provided,
          cursor: 'pointer',
        }),
        indicatorSeparator: provided => ({
          ...provided,
          display: 'none',
        }),
        placeholder: (provided, state) => ({
          ...provided,
          color: state.isFocused ? '#7B61FF' : '#ACA7C3',
          fontSize: '16px',
          fontWeight: 400,
          lineHeight: 1.5,
        }),
      }}
      placeholder="Input"
    />
  );
};

export default SelectForm;
