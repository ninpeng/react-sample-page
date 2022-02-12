import { useState, useMemo } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Slider from '@mui/material/Slider';

import { Bar, BarH, Donut, Pie } from 'react-roughviz';

const PREFIX = 'ChartComponent';

const classes = {
  root: `${PREFIX}-root`,
  form: `${PREFIX}-form`,
};

const StyledGrid = styled(Grid)({
  [`&.${classes.root}`]: {
    width: 350,
  },
  [`& .${classes.form}`]: {
    width: 300,
  },
});

const fillStyleList = ['hachure', 'cross-hatch', 'zigzag', 'dashed', 'solid', 'zigzag-line'];

const ChartComponent = ({ type, data }) => {
  const [roughness, setRoughness] = useState(1);
  const [fillStyle, setFillStyle] = useState('hachure');
  const [fillWeight, setFillWeight] = useState(0.5);

  const Component = useMemo(() => {
    switch (type.toLowerCase()) {
      case 'bar':
        return Bar;
      case 'barh':
        return BarH;
      case 'donut':
        return Donut;
      case 'pie':
        return Pie;
      default:
        return Bar;
    }
  }, [type]);

  const onChangeFillStyle = (e) => {
    setFillStyle(e.target.value);
  };

  const onChangeRoughness = (e, v) => {
    setRoughness(v);
  };

  const onChangeFillWeight = (e, v) => {
    setFillWeight(v);
  };

  return (
    <StyledGrid className={classes.root} item container justifyContent="center">
      <Grid item xs={12}>
        <Component
          data={data}
          labels="flavor"
          values="favorite"
          width={300}
          height={300}
          roughness={roughness}
          fillStyle={fillStyle}
          fillWeight={fillWeight}
        />
      </Grid>

      <Grid className={classes.form} item container>
        <Grid item xs={12}>
          <FormControl>
            <InputLabel id="label">FillStyle</InputLabel>
            <Select
              label="FillStyle"
              labelId="fillstyle-select-label"
              id="fillstyle-select"
              value={fillStyle}
              onChange={onChangeFillStyle}
            >
              {fillStyleList.map((fillStyle) => (
                <MenuItem key={fillStyle} value={fillStyle}>
                  {fillStyle}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Typography gutterBottom>Roughness</Typography>
          <Slider
            min={0}
            max={20}
            marks={[
              { value: 0, label: '0' },
              { value: 20, label: '20' },
            ]}
            valueLabelDisplay="auto"
            step={0.5}
            value={roughness}
            onChange={onChangeRoughness}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography gutterBottom>FillWeight</Typography>
          <Slider
            min={0}
            max={5}
            marks={[
              { value: 0, label: '0' },
              { value: 5, label: '5' },
            ]}
            valueLabelDisplay="auto"
            step={0.5}
            value={fillWeight}
            onChange={onChangeFillWeight}
          />
        </Grid>
      </Grid>
    </StyledGrid>
  );
};

export default ChartComponent;
