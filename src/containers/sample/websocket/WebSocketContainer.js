import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DefaultSampleContent from '../DefaultSampleContent';
import Ticker from './Ticker';
import options from './options.json';

const useStyles = makeStyles(theme => ({
  selectGrid: {
    padding: theme.spacing(2),
  },
  select: {
    width: '100%',
    maxWidth: 600,
  }
}));

const WebSocketContainer = () => {
  const [selectedOptions, setSelectedOptions] = useState(null);
  const [tickerData, setTickerData] = useState({});
  const classes = useStyles();

  const handleCodeChange = selectedOption => {
    setSelectedOptions(selectedOption);
  };

  useEffect(() => {
    if (!selectedOptions) return;

    const socket = new WebSocket('wss://api.upbit.com/websocket/v1');

    socket.onopen = () => {
      const msg = [
        {
          ticket: "UNIQUE_NINPENG_TICKER_TICKET"
        },
        {
          type: "ticker",
          codes: selectedOptions.map(option => option.value)
        }
      ];
  
      socket.send(JSON.stringify(msg));

      console.log('socket open : ', selectedOptions.map(option => option.value));
    }
  
    socket.onmessage = async (e) => {
      // 이 코드가 더 간결하지만 크롬에서만 작동함
      // const msg = JSON.parse(await e.data.text());
      // setTickerData(ticker => ({ ...ticker, [msg.code]: msg }));
  
      const fileReader = new FileReader();
      fileReader.onload = (event) => {
        const msg = JSON.parse(event.target.result);
        setTickerData(ticker => ({ ...ticker, [msg.code]: msg }));
      };
  
      fileReader.readAsText(e.data);
    }
  
    socket.onclose = () => {
      console.log('socket close');
    }

    return (() => {
      socket.close();
    })
  }, [selectedOptions]);

  return (
    <DefaultSampleContent title="WebSocket API">
      <Grid className={classes.selectGrid} container item xs justify="center">
        <Select
          className={classes.select}
          isMulti
          options={options.data}
          value={selectedOptions}
          onChange={handleCodeChange}
        />
      </Grid>
      <Grid container spacing={2}>
        { selectedOptions && selectedOptions.map(option =>
          <Ticker key={option.value} option={option} ticker={tickerData} />)
        }
      </Grid>
    </DefaultSampleContent>
  )
}

export default WebSocketContainer;
