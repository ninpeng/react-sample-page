import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { colourOptions, groupedOptions } from './data/data';

const PREFIX = 'SelectContainer';

const classes = {
  select: `${PREFIX}-select`,
};

const StyledGrid = styled(Grid)(({ theme }) => ({
  [`& .${classes.select}`]: {
    width: 500,
  },
}));

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

const formatGroupLabel = (data) => (
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

  const handleChange1 = (selectedOption) => {
    setSelectedOption1(selectedOption);
  };

  const handleChange2 = (selectedOption) => {
    setSelectedOption2(selectedOption);
  };

  const handleChange3 = (selectedOption) => {
    setSelectedOption3(selectedOption);
  };

  return (
    <StyledGrid container direction="column" alignContent="center" spacing={3}>
      <Grid item className={classes.select} xs={12}>
        <Select options={options} value={selectedOption1} onChange={handleChange1} />
      </Grid>
      <Grid item className={classes.select} xs={12}>
        <Select
          components={animatedComponents}
          value={selectedOption2}
          onChange={handleChange2}
          options={colourOptions}
          isMulti
        />
      </Grid>
      <Grid item className={classes.select} xs={12}>
        <Select
          options={groupedOptions}
          formatGroupLabel={formatGroupLabel}
          value={selectedOption3}
          onChange={handleChange3}
        />
      </Grid>
    </StyledGrid>
  );
};

export default SelectContainer;
