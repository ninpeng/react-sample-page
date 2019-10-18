import React, { useState, useEffect } from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import Select from 'react-select';

const options = [
  { value: 'KRW-BTC', label: '비트코인' },
  { value: 'KRW-ETH', label: '이더리움' },
  { value: 'KRW-LTC', label: '라이트코인' },
  { value: 'KRW-XRP', label: '리플' },
  { value: 'KRW-ETC', label: '이더리움클래식' },
  { value: 'KRW-ADA', label: '에이다' },
];

const customStyles = {
  container: (styles) => ({
    ...styles,
    // width: 400,
  })
}

const formatNumber = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

const Ticker = ({ option, ticker }) => {
  const { value, label } = option;
  const data = ticker[value];
  
  return (
    <div style={{ paddingTop: '20px' }}>
      <h1>{label}</h1>
      { data && 
        <ul className="lst">
          <li>시작가 : {formatNumber(data.opening_price)} 원</li>
          <li style={{ color: 'red' }}>고가 : {formatNumber(data.high_price)} 원</li>
          <li style={{ color: 'blue' }}>저가 : {formatNumber(data.low_price)} 원</li>
          <li>현재가 : {formatNumber(data.trade_price)} 원</li>
          <li style={{ color: data.change==='RISE' ? 'red' : data.change==='FALL' ? 'blue' : '' }}>등락폭 : {formatNumber(data.signed_change_price)} 원 ({data.signed_change_rate.toFixed(2)}%)</li>
          <li>업데이트 : {new Date(data.timestamp).toLocaleTimeString()}</li>
        </ul>
      }
    </div>
  )
}

const WebSocketContainer = () => {
  const [selectedOptions, setSelectedOptions] = useState(null);
  const [tickerData, setTickerData] = useState({});

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
      const msg = JSON.parse(await e.data.text());
      setTickerData(ticker => ({ ...ticker, [msg.code]: msg }));

      // console.log(msg);
  
      // const fileReader =  new FileReader();
      // fileReader.onload = (event) => {
      //   var msg = event.target.result;
      //   console.log(JSON.parse(msg))
      // };
  
      // fileReader.readAsBinaryString(e.data);
    }
  
    socket.onclose = () => {
      console.log('socket close');
    }

    return (() => {
      socket.close();
    })
  }, [selectedOptions]);

  return (
    <Container fluid>
      <Jumbotron>
        <h1 className="display-5">WebSocket API</h1>
      </Jumbotron>
      <div>
        <Select
          isMulti
          styles={customStyles}
          options={options}
          value={selectedOptions}
          onChange={handleCodeChange}
        />
        { selectedOptions && selectedOptions.map(option =>
          <Ticker key={option.value} option={option} ticker={tickerData} />)
        }
      </div>
    </Container>
  )
}

export default WebSocketContainer;
