import React, { useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { colourOptions, groupedOptions } from './data/data';

import './style.css';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const groupStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};
const groupBadgeStyles = {
  backgroundColor: '#EBECF0',
  borderRadius: '2em',
  color: '#172B4D',
  display: 'inline-block',
  fontSize: 12,
  fontWeight: 'normal',
  lineHeight: '1',
  minWidth: 1,
  padding: '0.16666666666667em 0.5em',
  textAlign: 'center',
};


const formatGroupLabel = data => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

const animatedComponents = makeAnimated();

const SelectContainer = () => {
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);
  
  const handleChange1 = selectedOption => {
    setSelectedOption1(selectedOption);
  };

  const handleChange2 = selectedOption => {
    setSelectedOption2(selectedOption);
  };

  const handleChange3 = selectedOption => {
    setSelectedOption3(selectedOption);
  };

  return (
    <div>
      <ul className="lst">
        <li>
          <Select
            options={options}
            value={selectedOption1}
            onChange={handleChange1}
          />
        </li>
        <li>
          <Select
            components={animatedComponents}
            value={selectedOption2}
            onChange={handleChange2}
            options={colourOptions}
            isMulti
          />
        </li>
        <li>
          <Select
            options={groupedOptions}
            formatGroupLabel={formatGroupLabel}
            value={selectedOption3}
            onChange={handleChange3}
          />
        </li>
      </ul>
    </div>
  )
}

export default SelectContainer;