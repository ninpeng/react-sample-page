import React, { useState, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Slider from '@material-ui/core/Slider';

import { Bar, BarH, Donut, Pie } from 'react-roughviz';

const fillStyleList = ['hachure', 'cross-hatch', 'zigzag', 'dashed', 'solid', 'zigzag-line'];

const useStyles = makeStyles({
  root: {
    width: 450,
  },
  form: {
    width: 300,
  },
});

const ChartComponent = ({ type, data }) => {
  const classes = useStyles();

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
  }

  const onChangeRoughness = (e, v) => {
    setRoughness(v);
  }

  const onChangeFillWeight = (e, v) => {
    setFillWeight(v);
  }
  
  return (
    <Grid className={classes.root} item container justify="center">
      <Grid item xs={12}>
        <Component
          data={data}
          labels="flavor"
          values="favorite"
          width={400}
          height={400}
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
              labelId="fillstyle-select-label"
              id="fillstyle-select"
              value={fillStyle}
              onChange={onChangeFillStyle}
            >
              { fillStyleList.map(fillStyle =>
                  <MenuItem key={fillStyle} value={fillStyle}>{fillStyle}</MenuItem>)
              }
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Typography gutterBottom>
            Roughness
          </Typography>
          <Slider
            min={0}
            max={20}
            marks={[{ value: 0, label: '0' }, { value: 20, label: '20' }]}
            valueLabelDisplay="auto"
            step={0.5}
            value={roughness}
            onChange={onChangeRoughness}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography gutterBottom>
            FillWeight
          </Typography>
          <Slider
            min={0}
            max={5}
            marks={[{ value: 0, label: '0' }, { value: 5, label: '5' }]}
            valueLabelDisplay="auto"
            step={0.5}
            value={fillWeight}
            onChange={onChangeFillWeight}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ChartComponent;